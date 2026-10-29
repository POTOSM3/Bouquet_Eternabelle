# Bouquet Eternabelle

Sitio web de la floristería Bouquet Eternabelle: ramos y arreglos artesanales hechos a la medida.
Pedidos y cotizaciones por WhatsApp: 7774-5924.

## Archivos

- `index.html`: estructura de la página
- `style.css`: diseño
- `script.js`: catálogos de graduaciones y Día de los Difuntos, visor de fotos y enlaces de WhatsApp
- `catalogo-graduaciones-2026.pdf`: catálogo para descargar
- `img/`: fotos, una carpeta por ocasión (`madre`, `novia`, `novio`, `amarillas`, `difuntos`, `boda`, `graduacion`). Las rutas de `graduacion` y `difuntos` se cambian al inicio de `script.js`

## Agregar un arreglo a un catálogo (graduaciones o difuntos)

1. Guarda la foto en `img/graduacion/`.
2. Abre `script.js` y copia uno de los bloques de la lista `PRODUCTOS` (graduaciones) o `PRODUCTOS_DIFUNTOS`.
3. Cambia `nombre`, `detalle`, `foto` y `alt`.

## Ver la página en tu computadora

Abre `index.html` en el navegador, o usa la extensión Live Server de VS Code.
