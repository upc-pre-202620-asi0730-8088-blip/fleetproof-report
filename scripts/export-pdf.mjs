import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(path.join(process.env.REPORT_DEPENDENCIES || repo, 'package.json'));
const { marked } = await import(pathToFileURL(require.resolve('marked')).href);
const { chromium } = require('playwright');
const mermaid = process.env.REPORT_MERMAID_BUNDLE || require.resolve('mermaid/dist/mermaid.min.js');
const output = process.argv[2];
if (!output) throw new Error('Usage: node scripts/export-pdf.mjs <output.pdf>');
const read = file => fs.readFile(path.join(repo, file), 'utf8');
const files = (await fs.readdir(path.join(repo, 'docs'))).filter(name => /^0[0-9]-.*\.md$/.test(name)).sort();
const readme = await read('README.md');
const coverMatch = /<!-- report-cover:start -->([\s\S]*?)<!-- report-cover:end -->/.exec(readme);
if (!coverMatch) throw new Error('Missing cover markers in README.md');
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
let diagrams = 0;

function html(markdown, file) {
  const tokens = marked.lexer(markdown);
  marked.walkTokens(tokens, token => {
    if (token.type === 'code' && token.lang === 'mermaid') {
      diagrams++;
      token.type = 'html';
      token.text = '<div class="mermaid">' + escape(token.text) + '</div>';
    }
  });
  return marked.parser(tokens).replace(/\b(src|href)=(["'])([^"']+)\2/g, (match, attr, quote, url) => {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(url)) return match;
    const [target, fragment] = url.split('#', 2);
    return `${attr}=${quote}${pathToFileURL(path.resolve(repo, path.dirname(file), target)).href}${fragment ? '#' + fragment : ''}${quote}`;
  });
}

const sections = [
  '<section class="cover">' + html(coverMatch[1], 'README.md') + '</section>',
  '<section>' + html(readme.slice(coverMatch.index + coverMatch[0].length).replace(/^\s*---\s*/, ''), 'README.md') + '</section>',
];
for (const name of files) {
  const file = 'docs/' + name;
  sections.push('<section>' + html(await read(file), file) + '</section>');
}

const css = `
@page{size:A4;margin:16mm 13mm 19mm;@bottom-right{content:counter(page);font:8pt Arial}}
@page cover{margin:25.4mm;@bottom-right{content:none}}
body{margin:0;font:10pt/1.4 Arial,sans-serif;color:#233447}
section + section{break-before:page}
h1,h2,h3,h4,h5,h6{break-after:avoid}
img,svg{max-width:100%;height:auto;max-height:235mm;object-fit:contain}
table{width:100%;table-layout:fixed;border-collapse:collapse;font-size:8pt;margin:0 0 9pt}
thead{display:table-header-group}tr{break-inside:avoid}
th,td{border:1px solid #bccbd5;padding:4px;overflow-wrap:anywhere;vertical-align:top}
th{background:#eaf1f6}a{color:#096478;overflow-wrap:anywhere}
pre{white-space:pre-wrap;font-size:8pt}code{overflow-wrap:anywhere}
.mermaid{text-align:center;break-inside:avoid}
.cover{page:cover;font:12pt/1.25 "Times New Roman",serif;color:#000;text-align:center}
.cover img{width:62pt;height:62pt;object-fit:contain;margin:0 0 5pt}
.cover p{margin:0}.cover strong{font-size:14pt}
.cover h1{font-size:16pt;margin:1pt 0}.cover h2{font-size:12pt;margin:15pt 0 2pt}
.cover .course,.cover .team{margin-top:14pt}
.cover table{font:11pt/1.3 "Times New Roman",serif;table-layout:auto;text-align:left;margin:0}
.cover table :is(th,td){border:0;padding:0 5pt 0 0;background:none}
.cover :is(th,td):first-child{width:70pt;white-space:nowrap}
.cover .period,.cover .month{margin-top:15pt}
.cover :is(.period,.month) strong{font-size:12pt}
`;

const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'fleetproof-report-'));
let browser;
try {
  const documentPath = path.join(temp, 'report.html');
  await fs.writeFile(documentPath, `<!doctype html><html lang="es"><meta charset="utf-8"><style>${css}</style>${sections.join('')}<script src="${pathToFileURL(mermaid).href}"></script><script>mermaid.initialize({startOnLoad:false});window.renderDone=mermaid.run();</script></html>`);
  browser = await chromium.launch({ channel: process.env.REPORT_CHROME_CHANNEL || 'chrome', headless: true });
  const page = await browser.newPage();
  await page.goto(pathToFileURL(documentPath).href, { waitUntil: 'load', timeout: 120000 });
  const result = await page.evaluate(async () => {
    await window.renderDone;
    const cover = document.querySelector('.cover');
    const broken = [...document.images].filter(img => !img.naturalWidth).map(img => img.src);
    const backlogs = [];
    for (const table of document.querySelectorAll('table')) {
      if (table.tHead?.rows[0]?.cells[0]?.textContent.trim() !== 'Story Id' ||
          ![...table.tHead.rows[0].cells].some(cell => cell.textContent.trim() === 'Task Id')) continue;
      if ([...table.rows].some(row => row.cells.length !== 8)) throw new Error('Backlog must have eight columns');
      const group = table.tHead.insertRow(0);
      for (const [label, columns] of [['User Story', 2], ['Work-Item / Task', 6]]) {
        const cell = document.createElement('th');
        cell.colSpan = columns;
        cell.scope = 'colgroup';
        cell.textContent = label;
        group.append(cell);
      }
      const widths = [7, 12, 8, 14, 27, 11, 12, 9];
      const colgroup = document.createElement('colgroup');
      for (const width of widths) {
        const col = document.createElement('col');
        col.style.width = width + '%';
        colgroup.append(col);
      }
      table.prepend(colgroup);
      const statuses = {};
      for (const row of table.tBodies[0].rows) {
        const status = row.cells[7].textContent.trim();
        statuses[status] = (statuses[status] || 0) + 1;
      }
      backlogs.push(statuses);
    }
    return { coverHeight: cover.getBoundingClientRect().height, broken,
      rendered: document.querySelectorAll('.mermaid svg').length, backlogs };
  });
  console.log(JSON.stringify({ diagrams, ...result }, null, 2));
  if (result.coverHeight > 930 || result.rendered !== diagrams || result.broken.length || result.backlogs.length < 2)
    throw new Error('PDF validation failed; see summary above');
  await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true });
} finally {
  await browser?.close();
  await fs.rm(temp, { recursive: true, force: true });
}
