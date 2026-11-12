# Capítulo II: Requirements Elicitation & Analysis

## 2.1 Competidores

Para el análisis competitivo se identificaron soluciones que atienden total o parcialmente la consulta de información vehicular en Perú. El criterio de selección considera servicios que permiten revisar datos por placa, obtener reportes, consultar fuentes oficiales o apoyar decisiones de compraventa de vehículos usados.

Los competidores directos priorizados son:

- **Autofact Perú** (<https://www.autofact.pe/>), por su posicionamiento como servicio de reporte vehicular para compra de autos usados.
- **HistorialVehicular.pe** (<https://historialvehicular.pe/>), por ofrecer consulta inicial por placa, informe completo, veredicto de riesgo y PDF descargable.
- **Mi Torito** (<https://mitorito.pe/>), por presentar consulta de historial vehicular, múltiples fuentes, reportes y alertas asociadas al estado del vehículo.

También se consideran como referencias parciales los portales públicos consultados por usuarios, como servicios de SUNARP, MTC, SAT, SBS y otros organismos. Estas fuentes no compiten como producto integral, pero sí forman parte del comportamiento actual de consulta manual.

### 2.1.1 Análisis competitivo

| Competidor | Perfil | Marketing y posicionamiento | Producto | Precios | Canales | Fortalezas | Debilidades |
|---|---|---|---|---|---|---|---|
| Autofact Perú | Servicio orientado a obtener información vehicular antes de comprar un auto usado. | Comunica seguridad en la compra, prevención de problemas y acceso a información por placa. | Reporte vehicular con antecedentes, historial y datos relevantes para decisión de compra. | Modelo de pago por reporte o paquetes, según disponibilidad comercial vigente. | Sitio web, contenido educativo y búsquedas orgánicas. | Marca reconocible, enfoque claro en compraventa y experiencia previa en reportes. | Se concentra principalmente en consulta puntual; no prioriza gestión recurrente de flotas ni seguimiento colaborativo. |
| HistorialVehicular.pe | Servicio digital peruano para consultar historial de vehículos por placa. | Resalta rapidez, veredicto de riesgo, PDF descargable y ahorro de tiempo frente a consulta manual. | Consulta gratuita inicial e informe completo con fuentes oficiales, deudas, papeletas, siniestros, SOAT y revisión técnica. | Publica precios por informe y paquetes; también comunica planes para consultas frecuentes. | Sitio web, contenido informativo y flujo directo de consulta por placa. | Transparencia en precios, foco local, veredicto de riesgo y PDF. | El enfoque principal sigue siendo el reporte individual; la gestión de múltiples vehículos queda como oportunidad. |
| Mi Torito | Servicio de consulta vehicular para compradores, vendedores y usuarios móviles. | Promete revisión rápida, múltiples fuentes verificadas, reporte de riesgo y experiencia simple. | Reportes por placa con propietarios, multas, SOAT, revisiones técnicas, marketplace y alertas. | Publica precio de reporte completo desde S/ 15.90, según información visible en su sitio. | Sitio web, aplicaciones móviles y presencia comercial digital. | Cobertura amplia de fuentes, propuesta simple, soporte móvil y alertas. | Puede percibirse como producto generalista; no presenta una propuesta especializada para flotas pequeñas y medianas. |

#### Competitive Analysis Landscape

| Criterio | Autofact Perú | HistorialVehicular.pe | Mi Torito | Oportunidad para FleetProof |
|---|---|---|---|---|
| Consulta por placa | Alta | Alta | Alta | Mantener consulta por placa como punto de entrada simple. |
| Reporte descargable | Alta | Alta | Alta | Diferenciar el reporte con evidencia, fecha, fuente y explicación del riesgo. |
| Gestión de flotas | Baja | Media | Media | Crear tablero de múltiples vehículos, responsables y estados de revisión. |
| Monitoreo recurrente | Baja | Media | Media | Incorporar seguimiento de cambios relevantes y alertas. |
| Trazabilidad de fuente | Media | Alta | Media | Mostrar origen, fecha y estado de cada fuente consultada. |
| Colaboración interna | Baja | Baja | Baja | Permitir asignación de responsables, observaciones y casos de resolución. |
| Claridad para usuarios no técnicos | Media | Alta | Alta | Usar lenguaje simple, explicación de hallazgos y recomendaciones accionables. |

#### SWOT de BLIP FleetProof frente a competidores

| Tipo | Análisis |
|---|---|
| Fortalezas | Enfoque en monitoreo continuo, trazabilidad de evidencias, gestión de múltiples vehículos y colaboración entre responsables. |
| Oportunidades | Empresas pequeñas y medianas con flotas necesitan pasar de consultas aisladas a control recurrente. Compradores particulares también requieren reportes comprensibles antes de decidir. |
| Debilidades | Producto nuevo, sin reconocimiento de marca ni histórico público de consultas procesadas. |
| Amenazas | Competidores existentes pueden ampliar sus reportes hacia planes recurrentes, alertas o funciones para empresas. |

### 2.1.2 Estrategias y tácticas frente a competidores

La estrategia de BLIP con FleetProof consiste en diferenciarse de los servicios centrados en reportes puntuales mediante una propuesta de control vehicular continuo. El producto no se limitará a entregar un documento final, sino que buscará organizar el ciclo completo de revisión: registro del vehículo, consulta de fuentes, identificación de hallazgos, evaluación de riesgo, generación de evidencia y seguimiento posterior.

Las tácticas principales son:

- **Trazabilidad visible:** cada hallazgo debe mostrar fuente, fecha de consulta y estado de disponibilidad. Esto responde a la incertidumbre identificada en los mapas de empatía y en los recorridos de usuario.
- **Gestión por vehículo y por flota:** el usuario debe poder revisar un vehículo individual o agrupar varios vehículos en una flota, asignando responsables y estados de revisión.
- **Riesgo explicable:** el sistema debe comunicar por qué un vehículo presenta riesgo, evitando depender solo de un color o indicador visual.
- **Reporte compartible:** FleetProof debe generar un resumen que pueda enviarse a clientes, compradores, vendedores o responsables internos.
- **Monitoreo recurrente:** a diferencia del reporte único, el producto debe permitir alertas ante cambios relevantes, vencimientos o inconsistencias posteriores.
- **Lenguaje comprensible:** los textos del producto deben evitar tecnicismos innecesarios y explicar consecuencias prácticas para la toma de decisiones.

Con estas tácticas, BLIP compite no solo por entregar información, sino por reducir incertidumbre operativa durante todo el proceso de validación vehicular.

## 2.2 Entrevistas

### 2.2.1 Diseño de entrevistas

Las entrevistas fueron diseñadas como sesiones semiestructuradas y conductuales. El objetivo fue conocer experiencias recientes de consulta, validación, coordinación y seguimiento de información vehicular, evitando preguntas de aprobación como “¿usarías esta aplicación?”. Cada guion priorizó hechos concretos: última revisión realizada, fuentes consultadas, evidencia conservada, problemas encontrados y forma de comunicar o resolver observaciones.

Para cumplir la rúbrica de la primera entrega, el equipo trabajó dos segmentos de análisis. El primer segmento reúne propietarios, compradores y asesores automotores que necesitan interpretar información antes de tomar una decisión de compra, venta o recomendación. El segundo segmento reúne responsables comerciales, logísticos o de negocios con vehículos propios o tercerizados, donde la revisión impacta operaciones, coordinación y continuidad del servicio.

#### Guion para propietarios, compradores y asesores automotores

1. Cuéntame sobre la última vez que revisaste o recomendaste revisar un vehículo antes de comprarlo, venderlo o usarlo.
2. ¿Qué información buscaste y qué fuentes consultaste?
3. ¿Qué parte de la revisión tomó más tiempo o generó más dudas?
4. ¿Cómo decidiste si un dato era confiable y estaba actualizado?
5. ¿Cómo guardaste o compartiste la evidencia encontrada?
6. ¿Qué hiciste cuando una fuente no respondió o mostró información distinta?
7. Después de la primera revisión, ¿volviste a consultar el vehículo? ¿Por qué?

#### Guion para responsables comerciales, logísticos y flotas pequeñas

1. Cuéntame sobre la última vez que tu equipo tuvo que validar un vehículo antes de usarlo, ofrecerlo o asignarlo.
2. ¿Quiénes participaron y cómo se repartieron las consultas o verificaciones?
3. ¿Qué documentos, fuentes o registros revisaron durante ese proceso?
4. ¿Dónde registraron los resultados y cómo los compartieron con otros responsables?
5. ¿Qué dato faltante, vencido o inconsistente retrasó una decisión?
6. ¿Cómo hacen seguimiento a una observación y saben quién debe resolverla?
7. ¿Qué cambios necesitan detectar después de la primera revisión?

### 2.2.2 Registro de entrevistas

Las entrevistas fueron registradas en video y almacenadas en una carpeta compartida de Google Drive. El registro sigue el formato de la guía: datos del entrevistado, evidencia visual, enlace al video, timing, duración y resumen breve. Para los videos con duración mayor a cinco minutos se consigna la duración total y el tramo principal utilizado para el análisis de la primera entrega.

Las siete entrevistas se realizaron el 14 de septiembre de 2026. Las horas de inicio y fin no están documentadas en las fichas. El campo «Timing analizado» indica el tramo revisado dentro de cada grabación, no la hora del día.

Carpeta de evidencias: [Entrevistas BLIP en Google Drive](https://drive.google.com/drive/folders/1J_CH36gLPBuRfEddE-mYVSuRtR42PupA?usp=sharing).

#### Entrevista 1: Cristhian Amaya

| Campo | Detalle |
|---|---|
| Segmento | Propietarios, compradores y asesores automotores |
| Nombres y apellidos | Cristhian Amaya |
| Edad | 39 años |
| Distrito | Chiclayo |
| Fecha | 14/09/2026 |
| Video | [Entrevista Cristhian Amaya](https://drive.google.com/file/d/1vuK3760hfVoZ6iQ2w8zH8JjX1x1xN4wV/view?usp=sharing) |
| Screenshot | ![Entrevista Cristhian Amaya](assets/chapter-2/interviews/interview-cristhian-amaya.png) |
| Timing analizado | 00:00-04:59 |
| Inicio y fin de la grabación (mm:ss) | 00:00–06:09 |
| Duración total | 06:09 |
| Resumen | Cristhian describe el proceso de revisión de información vehicular desde el rol de asesor automotor. Su experiencia evidencia que la consulta no se limita a obtener un dato, sino a interpretar información de distintas fuentes, explicar riesgos a terceros y conservar evidencia suficiente para respaldar una recomendación. El caso refuerza la necesidad de reportes claros, trazables y comprensibles para personas que no dominan términos técnicos del sector automotor. |

#### Entrevista 2: Diego Salazar

| Campo | Detalle |
|---|---|
| Segmento | Propietarios, compradores y asesores automotores |
| Nombres y apellidos | Diego Salazar |
| Edad | No consignada en el registro de entrevista |
| Distrito | No consignado en el registro de entrevista |
| Fecha | 14/09/2026 |
| Video | [Entrevista Diego Salazar](https://drive.google.com/file/d/1WOgmq7SrvhCsfrzepEs4MYiihV_H29So/view?usp=sharing) |
| Screenshot | ![Entrevista Diego Salazar](assets/chapter-2/interviews/interview-diego-salazar.png) |
| Timing analizado | 00:00-02:53 |
| Inicio y fin de la grabación (mm:ss) | 00:00–02:53 |
| Duración total | 02:53 |
| Resumen | Diego representa a usuarios que revisan vehículos antes de recomendar o continuar una compra. Su entrevista muestra que el proceso exige consultar varias fuentes, comparar resultados y comunicar hallazgos de forma simple. También evidencia que las capturas y mensajes se usan como respaldo informal, lo que abre oportunidad para centralizar evidencia y mantener historial por placa. |

#### Entrevista 3: Carmen Rojas

| Campo | Detalle |
|---|---|
| Segmento | Propietarios, compradores y asesores automotores |
| Nombres y apellidos | Carmen Rojas |
| Edad | No consignada en el registro de entrevista |
| Distrito | No consignado en el registro de entrevista |
| Fecha | 14/09/2026 |
| Video | [Entrevista Carmen Rojas](https://drive.google.com/file/d/1oC_IIEz323KG5xMw2XBtcArW4iBLHnSo/view?usp=sharing) |
| Screenshot | ![Entrevista Carmen Rojas](assets/chapter-2/interviews/interview-carmen-rojas.png) |
| Timing analizado | 00:00-02:21 |
| Inicio y fin de la grabación (mm:ss) | 00:00–02:21 |
| Duración total | 02:21 |
| Resumen | Carmen refleja la perspectiva de una compradora particular que necesita validar un vehículo antes de tomar una decisión. El principal dolor identificado es la dificultad para interpretar resultados dispersos y saber si un hallazgo es grave, pendiente o simplemente informativo. Este perfil confirma que FleetProof debe presentar riesgos en lenguaje claro y permitir compartir evidencia con personas de confianza. |

#### Entrevista 4: Roxana Limo

| Campo | Detalle |
|---|---|
| Segmento | Responsables comerciales, logísticos y flotas pequeñas |
| Nombres y apellidos | Roxana Limo |
| Edad | 43 años |
| Distrito | Trujillo |
| Fecha | 14/09/2026 |
| Video | [Entrevista Roxana Limo](https://drive.google.com/file/d/162TzcnpSq3aFRJ9C3_9D3Boq27fG1iA2/view?usp=sharing) |
| Screenshot | ![Entrevista Roxana Limo](assets/chapter-2/interviews/interview-roxana-limo.png) |
| Timing analizado | 00:00-04:59 |
| Inicio y fin de la grabación (mm:ss) | 00:00–11:47 |
| Duración total | 11:47 |
| Resumen | Roxana trabaja en el sector automotriz desde 2012 y actualmente se desempeña como jefa de marca para Hyundai y Geely, supervisando operaciones comerciales en Trujillo, Huancayo y Chiclayo. Explica que, antes de exhibir o entregar una unidad, intervienen áreas como PDI, lavado y calidad, utilizando checklists para validar estado de pintura, equipamiento, batería, tablero, sistema eléctrico, frenos y estado general. Señala que las observaciones se registran primero en checklist y luego en informes enviados a la marca. También menciona que una mala preparación comercial, una batería descargada, una puerta mal cerrada, la pérdida de una llave o una rayadura antes de la entrega pueden generar inseguridad en el cliente y retrasar la compra. Para resolver observaciones, cada área tiene responsables definidos dentro del organigrama y puede intervenir postventa, taller o PDI. Su principal aprendizaje es que la prevención y una preparación con más anticipación reducen riesgos antes del showroom o la entrega. |

#### Entrevista 5: Patricia Valdez

| Campo | Detalle |
|---|---|
| Segmento | Responsables comerciales, logísticos y flotas pequeñas |
| Nombres y apellidos | Patricia Valdez |
| Edad | No consignada en el registro de entrevista |
| Distrito | No consignado en el registro de entrevista |
| Fecha | 14/09/2026 |
| Video | [Entrevista Patricia Valdez](https://drive.google.com/file/d/1xHdo7dU-W5I4Iyjdo4MMCZ1lm9HqCnv_/view?usp=sharing) |
| Screenshot | ![Entrevista Patricia Valdez](assets/chapter-2/interviews/interview-patricia-valdez.png) |
| Timing analizado | 00:00-02:14 |
| Inicio y fin de la grabación (mm:ss) | 00:00–02:14 |
| Duración total | 02:14 |
| Resumen | Patricia representa a responsables que coordinan vehículos dentro de una operación logística. Su entrevista evidencia que la información se administra entre documentos, hojas de cálculo y comunicación por mensajería, lo cual puede dificultar saber qué versión está actualizada o quién resolvió una observación. Este caso refuerza funcionalidades de historial, responsable asignado y seguimiento de pendientes. |

#### Entrevista 6: Jorge Quispe

| Campo | Detalle |
|---|---|
| Segmento | Responsables comerciales, logísticos y flotas pequeñas |
| Nombres y apellidos | Jorge Quispe |
| Edad | No consignada en el registro de entrevista |
| Distrito | No consignado en el registro de entrevista |
| Fecha | 14/09/2026 |
| Video | [Entrevista Jorge Quispe](https://drive.google.com/file/d/11BytvV6lIa4OAwuAf7aGYBnovSOXAWAk/view?usp=sharing) |
| Screenshot | ![Entrevista Jorge Quispe](assets/chapter-2/interviews/interview-jorge-quispe.png) |
| Timing analizado | 00:00-02:23 |
| Inicio y fin de la grabación (mm:ss) | 00:00–02:23 |
| Duración total | 02:23 |
| Resumen | Jorge representa a pequeños negocios que dependen de vehículos para operar. Su caso muestra la importancia de verificar documentos antes de incorporar o usar una unidad, así como la necesidad de identificar responsables cuando aparece una observación. El proceso actual depende de mensajes y archivos separados, por lo que FleetProof puede aportar una vista única del estado del vehículo. |

#### Entrevista 7: Mei Lin Tanaka

| Campo | Detalle |
|---|---|
| Segmento | Responsables comerciales, logísticos y flotas pequeñas |
| Nombres y apellidos | Mei Lin Tanaka |
| Edad | No consignada en el registro de entrevista |
| Distrito | No consignado en el registro de entrevista |
| Fecha | 14/09/2026 |
| Video | [Entrevista Mei Lin Tanaka](https://drive.google.com/file/d/1DfSUkGKlXqStdo9usFfPKANPNCxcknrs/view?usp=sharing) |
| Screenshot | ![Entrevista Mei Lin Tanaka](assets/chapter-2/interviews/interview-mei-lin.png) |
| Timing analizado | 00:00-03:44 |
| Inicio y fin de la grabación (mm:ss) | 00:00–03:44 |
| Duración total | 03:44 |
| Resumen | Mei Lin representa a negocios gastronómicos pequeños que usan reparto propio o tercerizado. Su entrevista evidencia preocupación por la puntualidad, confiabilidad y disponibilidad de vehículos o repartidores. El dolor principal no es solo consultar una placa, sino reducir riesgos antes de asignar un pedido y recibir alertas cuando un documento, multa o condición del vehículo cambia. |

### 2.2.3 Análisis de entrevistas

El análisis se realizó sobre siete entrevistas distribuidas en dos segmentos. En el segmento de propietarios, compradores y asesores automotores se registraron tres entrevistas; en el segmento de responsables comerciales, logísticos y flotas pequeñas se registraron cuatro entrevistas. Esta distribución permite comparar patrones entre necesidad individual de decisión y necesidad organizacional de seguimiento.

#### Resultados generales

| Hallazgo codificado | Frecuencia | Porcentaje | Interpretación para FleetProof |
|---|---:|---:|---|
| Consulta de más de una fuente antes de decidir | 7/7 | 100% | El producto debe centralizar fuentes y mostrar claramente origen, fecha y estado de cada consulta. |
| Conservación manual de evidencia en capturas, Drive, WhatsApp u hojas de cálculo | 7/7 | 100% | Existe oportunidad para guardar evidencia dentro del historial del vehículo. |
| Necesidad de alertas o seguimiento posterior a la primera revisión | 7/7 | 100% | El reporte puntual debe conectarse con monitoreo recurrente. |
| Dificultad por datos inconsistentes, incompletos o fuentes no disponibles | 6/7 | 86% | FleetProof debe comunicar indisponibilidad y permitir reintentos sin ocultar incertidumbre. |
| Coordinación con otra persona para validar o resolver observaciones | 5/7 | 71% | Se justifica incluir responsables, estado de atención y trazabilidad de resolución. |
| Impacto operativo o comercial por no validar a tiempo | 5/7 | 71% | La propuesta debe comunicar reducción de riesgo antes de compra, venta, reparto o uso de flota. |

#### Segmento 1: propietarios, compradores y asesores automotores

Este segmento agrupa a Cristhian Amaya, Diego Salazar y Carmen Rojas. Los tres participantes relataron procesos de consulta previos a una decisión de compra, venta o recomendación. En todos los casos se utilizaron varias fuentes y se conservaron capturas o enlaces como respaldo. Cristhian y Diego, por su rol asesor, destacaron la necesidad de traducir datos técnicos a lenguaje comprensible; Carmen evidenció la dificultad de una compradora particular para interpretar diferencias entre multa, observación registral o documento pendiente.

| Patrón del segmento | Frecuencia | Porcentaje |
|---|---:|---:|
| Consulta de fuentes oficiales o especializadas | 3/3 | 100% |
| Uso de capturas o mensajes para compartir evidencia | 3/3 | 100% |
| Necesidad de explicar hallazgos con lenguaje simple | 3/3 | 100% |
| Dudas por actualización o consistencia de datos | 2/3 | 67% |
| Interés en volver a consultar si la compra se retrasa o aparece nueva información | 2/3 | 67% |

Para este segmento, FleetProof debe priorizar reportes claros, evidencia descargable, explicación de riesgo y lenguaje no técnico. El valor principal no es solo obtener información, sino convertirla en una decisión confiable y comunicable.

#### Segmento 2: responsables comerciales, logísticos y flotas pequeñas

Este segmento agrupa a Roxana Limo, Patricia Valdez, Jorge Quispe y Mei Lin Tanaka. Los cuatro casos muestran que la validación vehicular no ocurre de forma aislada: intervienen responsables comerciales, administración, logística, conductores, repartidores o familiares que apoyan el negocio. Las respuestas evidencian uso de WhatsApp, Drive, hojas de cálculo y carpetas compartidas para coordinar documentos y observaciones.

| Patrón del segmento | Frecuencia | Porcentaje |
|---|---:|---:|
| Coordinación con más de una persona para validar o usar el vehículo | 4/4 | 100% |
| Registro distribuido en WhatsApp, Drive, hojas o carpetas | 4/4 | 100% |
| Necesidad de asignar responsables para resolver observaciones | 4/4 | 100% |
| Necesidad de alertas de vencimientos, multas o cambios registrales | 4/4 | 100% |
| Impacto operativo o comercial por retrasos en validación | 3/4 | 75% |

Para este segmento, FleetProof debe funcionar como registro colaborativo por vehículo. Además del reporte inicial, son relevantes el estado de observaciones, la asignación de responsables, el historial de consultas, las alertas y la evidencia centralizada.

#### Conclusiones de Needfinding derivadas de entrevistas

Las entrevistas confirman que el problema no se limita a consultar una placa. Los usuarios necesitan saber qué fuente respondió, cuándo respondió, qué evidencia respalda el dato y qué acción corresponde si aparece una observación. También se valida que la propuesta de BLIP debe integrar dos usos: consulta puntual para decidir y seguimiento recurrente para evitar que cambios posteriores pasen desapercibidos.

Los hallazgos fortalecen cuatro decisiones de producto: primero, conservar snapshots fechados de cada consulta; segundo, mostrar un resumen de riesgo con explicación; tercero, permitir evidencia compartible; y cuarto, agregar funciones colaborativas para flotas o negocios que requieren responsables y seguimiento de pendientes.

## 2.3 Needfinding

### 2.3.1 User Personas

Los User Personas fueron elaborados en UXPressia para representar a actores relevantes dentro del proceso actual de consulta, validación y uso de información vehicular. Estos perfiles permiten conectar los hallazgos del proceso de investigación con decisiones posteriores de diseño, alcance funcional y priorización de historias de usuario.

Para esta entrega se consideran dos perfiles principales de análisis:

- **Cristhian Amaya**, consultor automotor y creador de contenido digital. Representa a un actor experto que asesora a compradores y vendedores cuando necesitan interpretar información vehicular antes de tomar una decisión.
- **Roxana Limo**, jefa de marcas de Automotores Inka. Representa a una responsable comercial que necesita validar información de vehículos antes de ofrecerlos a clientes y coordinar decisiones entre diferentes sedes.

#### User Persona: Cristhian Amaya

![User Persona - Cristhian Amaya](assets/chapter-2/user-personas/user-persona-cristhian-amaya.png)

Figura 2.X. User Persona de Cristhian Amaya.

Fuente y enlace al artefacto: UXPressia. URL: [COMPLETAR].

Cristhian evidencia la necesidad de contar con información vehicular confiable, trazable y fácil de explicar. Su trabajo depende de revisar datos antes de brindar recomendaciones, por lo que FleetProof debe permitir consultar un vehículo por placa, consolidar hallazgos relevantes y presentar un resumen comprensible para personas que no dominan términos técnicos del sector automotor.

#### User Persona: Roxana Limo

![User Persona - Roxana Limo](assets/chapter-2/user-personas/user-persona-roxana-limo.png)

Figura 2.X. User Persona de Roxana Limo.

Fuente y enlace al artefacto: UXPressia. URL: [COMPLETAR].

Roxana evidencia una necesidad operativa vinculada a la gestión comercial de vehículos. Su principal dificultad es trabajar con información distribuida entre sedes, registros internos y consultas independientes. Para este perfil, FleetProof debe ofrecer una vista centralizada del estado del vehículo, evidencia de la fuente revisada, historial de consultas y soporte para decisiones comerciales con menor riesgo de información incompleta.

### 2.3.2 User Task Matrix

La matriz de tareas resume las actividades actuales identificadas en los perfiles de usuario. La frecuencia e importancia son preliminares y deberán validarse con entrevistas reales antes de la entrega final.

| Tarea actual | Cristhian Amaya - Frecuencia | Cristhian Amaya - Importancia | Roxana Limo - Frecuencia | Roxana Limo - Importancia | Oportunidad para FleetProof |
|---|---|---|---|---|---|
| Recibir consultas o necesidades de validación vehicular | Alta | Alta | Alta | Alta | Registrar solicitudes de revisión con motivo, placa y responsable. |
| Buscar información mediante placa o datos del vehículo | Alta | Alta | Media | Alta | Centralizar consulta vehicular desde una vista única. |
| Revisar documentos, registros internos o fuentes externas | Media | Alta | Alta | Alta | Guardar evidencia, fuente, fecha y observación por cada revisión. |
| Comparar información encontrada para detectar riesgos | Alta | Alta | Alta | Alta | Mostrar inconsistencias, alertas y nivel de riesgo explicable. |
| Comunicar resultados a terceros | Alta | Alta | Media | Alta | Generar resumen claro y reporte compartible. |
| Coordinar acciones con equipos internos | Baja | Media | Alta | Alta | Asignar pendientes, responsables y estado de resolución. |
| Conservar historial de consultas o cambios | Media | Alta | Alta | Alta | Mantener historial por vehículo y trazabilidad de decisiones. |
| Dar seguimiento posterior al vehículo | Media | Media | Media | Alta | Activar monitoreo y alertas ante cambios importantes. |
| Crear contenido o recomendaciones basadas en datos | Alta | Media | Baja | Baja | Convertir hallazgos en explicaciones comprensibles para usuarios. |

La matriz muestra que ambos perfiles comparten tareas críticas relacionadas con búsqueda, verificación, comparación y comunicación de información vehicular. La diferencia principal se encuentra en el contexto de uso: Cristhian prioriza claridad para orientar a su comunidad, mientras Roxana prioriza coordinación interna, respaldo comercial y reducción de riesgos antes de atender clientes.

### 2.3.3 User Journey Mapping

Los User Journey Maps representan la experiencia actual de cada perfil antes de utilizar FleetProof. Se organizaron en cinco etapas: identificación de necesidad, recopilación de información, análisis de datos, gestión de resultados y cierre del proceso. Cada mapa permite reconocer puntos de fricción y oportunidades que serán consideradas en los capítulos de especificación y diseño del producto.

#### User Journey Map: Cristhian Amaya

![User Journey Map - Cristhian Amaya](assets/chapter-2/user-journey-maps/user-journey-cristhian-amaya.png)

Figura 2.X. User Journey Map de Cristhian Amaya.

Fuente y enlace al artefacto: UXPressia. URL: [COMPLETAR].

El recorrido de Cristhian inicia cuando recibe consultas de usuarios interesados en conocer información de un vehículo. Luego busca datos en fuentes disponibles, interpreta hallazgos, comunica recomendaciones y mantiene relación con su comunidad. El punto más crítico aparece durante el análisis, debido a la dificultad para comprobar origen, fecha y confiabilidad de los datos. Esto justifica que FleetProof priorice trazabilidad, resumen entendible y soporte para generar evidencia antes de emitir recomendaciones.

#### User Journey Map: Roxana Limo

![User Journey Map - Roxana Limo](assets/chapter-2/user-journey-maps/user-journey-roxana-limo.png)

Figura 2.X. User Journey Map de Roxana Limo.

Fuente y enlace al artefacto: UXPressia. URL: [COMPLETAR].

El recorrido de Roxana inicia con la recepción de información de un vehículo disponible para venta o evaluación. Después coordina con distintas áreas, revisa documentos, valida posibles riesgos y utiliza los datos para preparar información comercial. El mayor dolor ocurre cuando la información se encuentra distribuida o incompleta, ya que puede retrasar decisiones y afectar la confianza del cliente. Esto sustenta funcionalidades vinculadas a historial del vehículo, registro de observaciones, seguimiento entre sedes y reportes verificables.

### 2.3.4 Empathy Mapping

Los Empathy Maps complementan los User Personas al describir lo que cada usuario ve, escucha, piensa, siente, dice y hace durante el proceso de validación vehicular. Esta herramienta ayuda a identificar preocupaciones, motivaciones, dolores y beneficios esperados desde la perspectiva del usuario.

#### Empathy Map: Cristhian Amaya

![Empathy Map - Cristhian Amaya](assets/chapter-2/empathy-maps/empathy-map-cristhian-amaya.png)

Figura 2.X. Empathy Map de Cristhian Amaya.

Fuente y enlace al artefacto: UXPressia. URL: [COMPLETAR].

Cristhian percibe que muchas personas compran vehículos usados sin información suficiente o sin capacidad para interpretar datos técnicos. Sus principales dolores son la información dispersa, el tiempo invertido en verificación y la ausencia de una herramienta centralizada para organizar consultas. Sus beneficios esperados se relacionan con reducir tiempo de revisión, brindar respuestas más rápidas y fortalecer la confianza de su comunidad mediante información verificable.

#### Empathy Map: Roxana Limo

![Empathy Map - Roxana Limo](assets/chapter-2/empathy-maps/empathy-map-roxana-limo.png)

Figura 2.X. Empathy Map de Roxana Limo.

Fuente y enlace al artefacto: UXPressia. URL: [COMPLETAR].

Roxana percibe que la confianza del cliente depende de la claridad y confiabilidad de la información entregada durante el proceso comercial. Sus principales dolores son la información distribuida entre fuentes, la dificultad para validar antecedentes con rapidez y la falta de seguimiento histórico. Sus beneficios esperados se relacionan con coordinación entre sedes, evidencia verificable, reducción de tiempos de validación y toma de decisiones comerciales con mayor seguridad.

### 2.3.5 As-is Scenario Mapping

En esta sección se registran los As-is Scenario Maps elaborados para representar la situación actual de los actores vinculados al problema de FleetProof, antes de introducir la solución propuesta por BLIP. Los mapas se construyeron con una estructura de tres niveles: acciones realizadas, pensamientos del usuario y emociones experimentadas durante el proceso. Esta lectura permite identificar puntos de dolor, necesidades de información y oportunidades para el diseño posterior de requisitos, historias de usuario y flujos de la aplicación web.

Los mapas enviados deben tratarse como evidencia visual de trabajo del equipo. Antes de la entrega final, se recomienda reemplazar o complementar las descripciones preliminares con hallazgos obtenidos en entrevistas reales, indicando fecha, herramienta utilizada, integrantes participantes y enlace al tablero original.

#### Segmento 1: responsables de flotas pequeñas y medianas

![As-is Scenario Map - Responsables de flotas pequeñas y medianas](assets/chapter-2/as-is-scenario-maps/as-is-seg-01-fleet-operations.png)

Figura 2.X. As-is Scenario Map para responsables de flotas pequeñas y medianas.

Fuente y enlace al artefacto: tablero elaborado por el equipo en Miro. URL: [COMPLETAR].

Este mapa representa el recorrido de un responsable que recibe la necesidad de revisar documentación vehicular, busca información en diversas fuentes, verifica datos y documentos, gestiona problemas encontrados y toma decisiones operativas. El principal dolor identificado es la dispersión de información y el seguimiento manual de pendientes, lo que sustenta funciones como checklist por fuente, dashboard de riesgo, registro de evidencia y casos de resolución.

#### Segmento 2: propietarios o compradores particulares

![As-is Scenario Map - Propietarios o compradores particulares](assets/chapter-2/as-is-scenario-maps/as-is-seg-02-buyer-owner.png)

Figura 2.X. As-is Scenario Map para propietarios o compradores particulares.

Fuente y enlace al artefacto: tablero elaborado por el equipo en Miro. URL: [COMPLETAR].

Este mapa muestra el proceso de una persona que identifica interés por un vehículo, busca información mediante la placa, evalúa los datos encontrados, decide si continúa con la compra y realiza seguimiento posterior. Los puntos de dolor principales se relacionan con incertidumbre, exceso de información disponible e interpretación de datos. Esto sustenta la necesidad de un reporte claro, riesgo explicable, PDF compartible y monitoreo básico posterior.

#### Actor complementario: vendedor o equipo comercial

![As-is Scenario Map - Vendedor o equipo comercial](assets/chapter-2/as-is-scenario-maps/as-is-seg-03-commercial-seller.png)

Figura 2.X. As-is Scenario Map para vendedor o equipo comercial.

Fuente y enlace al artefacto: tablero elaborado por el equipo en Miro. URL: [COMPLETAR].

Este mapa describe el trabajo de un vendedor o equipo comercial que recibe información del vehículo, revisa registros disponibles, valida antecedentes, prepara información comercial y atiende al cliente. Aunque este actor no necesariamente constituye un segmento independiente, ayuda a comprender el valor de la transparencia en procesos de compraventa y puede alimentar historias vinculadas a reportes compartibles y evidencia confiable.

#### Actor complementario: asesor o generador de contenido automotor

![As-is Scenario Map - Asesor o generador de contenido automotor](assets/chapter-2/as-is-scenario-maps/as-is-seg-04-automotive-advisor.png)

Figura 2.X. As-is Scenario Map para asesor o generador de contenido automotor.

Fuente y enlace al artefacto: tablero elaborado por el equipo en Miro. URL: [COMPLETAR].

Este mapa representa a un actor que recibe consultas de usuarios, investiga información vehicular, analiza datos, comunica resultados y mantiene confianza con su comunidad. Debe utilizarse como actor complementario, no como segmento principal, salvo que el equipo decida ampliar formalmente el alcance. Su aporte principal para FleetProof es reforzar la importancia de comunicar resultados de manera clara, verificable y útil para la toma de decisiones.

#### Síntesis de oportunidades derivadas

| Oportunidad | Sustento en los mapas | Relación con el producto |
|---|---|---|
| Centralizar información por vehículo | Los actores buscan datos en fuentes separadas y comparan documentos manualmente. | Registro de vehículo, Source Check y Evidence. |
| Explicar el riesgo encontrado | Usuarios particulares y asesores necesitan interpretar datos sin ambigüedad. | Risk Assessment con explicación textual, no solo visual. |
| Conservar trazabilidad | Flotas y vendedores requieren demostrar de dónde salió cada dato. | Fuente, fecha, evidencia y responsable por revisión. |
| Dar seguimiento a pendientes | Las flotas gestionan problemas y responsables de forma manual. | Alert y Resolution Case. |
| Compartir resultados confiables | Compradores, vendedores y asesores comunican información a terceros. | Reporte descargable y resumen compartible. |

## 2.4 Big Picture Event Storming

El Big Picture Event Storming fue elaborado en Miro para analizar el dominio de FleetProof desde una perspectiva de eventos, decisiones, actores, fuentes externas y preguntas abiertas. El tablero se encuentra disponible en el siguiente enlace: <https://miro.com/app/board/uXjVHntEsLk=/>.

La dinámica se organizó en tres fases:

- **Open:** identificación amplia de eventos del dominio, sin ordenar todavía el flujo.
- **Explore:** organización de eventos en flujos principales y detección de decisiones, actores y sistemas externos.
- **Close:** agrupación de preguntas abiertas que deben resolverse antes del diseño detallado.

![Big Picture Event Storming - Overview](assets/chapter-2/event-storming/big-picture-event-storming-overview.png)

Figura 2.X. Vista general del Big Picture Event Storming de FleetProof.

Fuente y enlace al artefacto: tablero elaborado por el equipo en Miro. URL: <https://miro.com/app/board/uXjVHntEsLk=/>.

### 2.4.1 Fase Open

![Big Picture Event Storming - Open](assets/chapter-2/event-storming/open-phase-domain-events.png)

Figura 2.X. Fase Open del Big Picture Event Storming.

En la fase Open se identificaron eventos del dominio relacionados con registro de vehículo, consulta por placa, solicitud de información, revisión de documentos, obtención de datos, generación de reportes, identificación de riesgos, activación de monitoreo, detección de cambios y envío de alertas. Esta fase permitió reconocer que FleetProof no se limita a una consulta aislada, sino que incluye procesos posteriores de seguimiento, revisión y gestión de evidencias.

### 2.4.2 Fase Explore

![Big Picture Event Storming - Explore](assets/chapter-2/event-storming/explore-phase-process-flows.png)

Figura 2.X. Fase Explore del Big Picture Event Storming.

En la fase Explore se ordenaron los eventos en tres flujos principales:

- **Vehicle Report Flow:** cubre registro de usuario, consulta vehicular, pago, consulta de fuentes oficiales, consolidación de información, generación de reporte y revisión final por el usuario.
- **Monitoring Flow:** cubre selección del servicio de monitoreo, activación de suscripción, registro de placa monitoreada, revisión periódica, detección de cambios y notificación.
- **Fleet Flow:** cubre selección de servicio para gestión de flotas, registro de flota, asignación de vehículos, revisión de estado, identificación de riesgo y notificación a responsables.

La fase Explore también permitió identificar decisiones relevantes, como disponibilidad de fuentes externas, detección tardía de riesgos y comparación manual de información por parte del usuario.

### 2.4.3 Fase Close

![Big Picture Event Storming - Close](assets/chapter-2/event-storming/close-phase-question-clusters.png)

Figura 2.X. Fase Close del Big Picture Event Storming.

En la fase Close se agruparon preguntas abiertas por tema. Las principales categorías fueron Vehicle Information, Vehicle Report, Fleet Management, External Systems, Subscription / Payment y Vehicle Monitoring. Estas preguntas ayudan a definir límites del producto y reducir incertidumbre técnica antes de construir historias de usuario.

| Categoría | Preguntas abiertas | Decisión por resolver |
|---|---|---|
| Vehicle Information | ¿Qué fuentes oficiales brindan información?, ¿qué ocurre si una fuente no está disponible?, ¿cada cuánto se actualiza la información? | Definir fuentes iniciales y política de actualización. |
| Vehicle Report | ¿Cómo se valida la precisión del reporte?, ¿cuánto tiempo estará disponible?, ¿qué ocurre si falla la generación? | Definir vigencia del reporte, manejo de fallos y evidencia visible. |
| Fleet Management | ¿Qué define un riesgo de flota?, ¿quién es responsable por cada vehículo?, ¿cómo se calcula el riesgo? | Definir reglas de riesgo y responsables internos. |
| External Systems | ¿Cómo impacta CAPTCHA en tiempo de consulta?, ¿qué ocurre si falla un servicio externo? | Definir estrategia de manejo de indisponibilidad. |
| Subscription / Payment | ¿Qué ocurre si falla un pago?, ¿cuándo se activa la suscripción?, ¿qué servicios requieren suscripción activa? | Definir reglas de activación y restricciones por plan. |
| Vehicle Monitoring | ¿Qué cambios generan alertas?, ¿con qué frecuencia se revisan los vehículos?, ¿quién recibe la alerta? | Definir frecuencia de monitoreo y destinatarios. |

## 2.5 Ubiquitous Language

| Term | Definition |
|---|---|
| User Account | Cuenta creada por una persona para acceder a FleetProof y consultar información vehicular. |
| License Plate | Identificador de placa usado como dato inicial para buscar información de un vehículo. |
| Vehicle | Unidad vehicular registrada o consultada dentro de FleetProof. |
| Vehicle Report | Reporte consolidado que resume información vehicular obtenida desde fuentes disponibles. |
| Report Request | Solicitud realizada por el usuario para investigar un vehículo. |
| Source Check | Revisión individual de una fuente específica relacionada con el vehículo. |
| Official Source | Fuente pública u oficial usada para obtener o contrastar información vehicular. |
| External Source | Fuente externa complementaria que aporta información para la evaluación vehicular. |
| Source Unavailable | Estado generado cuando una fuente no responde o no permite completar la consulta. |
| Finding | Dato relevante que requiere atención, explicación o seguimiento. |
| Evidence | Registro que respalda un dato encontrado, incluyendo fuente, fecha y estado de consulta. |
| Snapshot | Estado consolidado del vehículo en una fecha determinada. |
| Risk Assessment | Evaluación explicable basada en hallazgos, reglas de negocio y estado de fuentes consultadas. |
| Fleet | Conjunto de vehículos agrupados para seguimiento operativo o comercial. |
| Fleet Risk | Riesgo calculado sobre uno o varios vehículos asociados a una flota. |
| Monitoring Service | Servicio que revisa cambios relevantes después de registrar un vehículo para seguimiento. |
| Alert | Notificación generada cuando se detecta un cambio, vencimiento o riesgo relevante. |
| Responsible Person | Usuario asignado para revisar una observación o dar seguimiento a un vehículo. |
| Resolution Case | Trabajo asignado para resolver una observación detectada durante la revisión. |
| Subscription | Acceso activo que habilita servicios recurrentes como monitoreo o gestión de flotas. |
| Payment | Operación económica asociada a un reporte, plan o servicio dentro de FleetProof. |
