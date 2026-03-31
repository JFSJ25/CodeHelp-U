# CodeHelp U Landing

Landing page enfocada en conversion para un servicio de ayuda en programacion universitaria. El objetivo principal es llevar al visitante a WhatsApp para iniciar una conversacion de venta.

## Objetivo de la web

Flujo de conversion esperado:

QR -> Landing -> WhatsApp -> Conversacion -> Venta

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Estructura del proyecto

- index.html: estructura y contenido de la landing
- styles.css: estilos responsive (mobile-first)
- script.js: logica de botones y enlace a WhatsApp
- public/: recursos multimedia e iconos

## Estado del brief (revision)

- Hero con titulo directo, subtitulo y CTA principal: Cumple
- Seccion de servicios en cards: Cumple
- Diferenciacion en formato checklist: Cumple
- Evidencia (videos / ejemplos): Cumple
- Refuerzo psicologico: Cumple
- Precios simples y claros: Cumple
- CTA final con consulta gratis: Cumple
- Horario + escasez: Cumple
- Boton flotante de WhatsApp siempre visible: Cumple

## Personalizacion rapida

1. Cambia numero y mensaje de WhatsApp en script.js:

- WHATSAPP_NUMBER
- WHATSAPP_MESSAGE

2. Ajusta textos comerciales en index.html:

- Titular principal
- Beneficios
- Horario y disponibilidad
- Precios

3. Sustituye recursos en public/:

- Videos de evidencia
- Iconos o imagenes

## Ejecutar en local

No requiere dependencias.

1. Clona el repositorio.
2. Abre index.html en tu navegador.

Tambien puedes usar una extension tipo Live Server para desarrollo.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a Settings -> Pages.
3. En Build and deployment, selecciona Deploy from a branch.
4. Elige branch main y carpeta /(root).
5. Guarda cambios y espera la URL publica.

## Nota sobre archivos de video

El proyecto incluye videos MP4 en public/ que pueden hacer pesado el repositorio. Si quieres una publicacion mas ligera:

- Comprime videos antes de subir
- Usa Git LFS para multimedia pesada
- O reemplaza por placeholders durante la etapa inicial

## Licencia

Este proyecto usa licencia MIT. Revisa el archivo LICENSE para mas detalles.
