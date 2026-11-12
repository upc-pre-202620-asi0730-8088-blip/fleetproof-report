# Exportar el informe

GitHub muestra el Markdown, pero imprimir la página de GitHub no produce el
formato de entrega. El exportador toma el contenido de esta copia del repositorio
y produce un PDF A4 con carátula independiente y diagramas Mermaid renderizados.

Requisitos: Node.js 22+, Google Chrome y las dependencias del exportador.
Desde la raíz del repositorio:

```sh
npm install --no-save --no-package-lock marked mermaid playwright
node scripts/export-pdf.mjs ../outputs/fleetproof-report-revision.pdf
```

La exportación requiere acceso a las imágenes externas referenciadas. Si falta
una imagen, un diagrama no se renderiza o el backlog pierde columnas, el script
se detiene. Revise visualmente la portada y las tablas en el PDF antes de enviar.
