# Changelog

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [Unreleased]

### Added

- `favicon.svg` — icono del sitio en formato SVG (32×32 px): fondo `#0f172a`, nodo ámbar
  en la cima (era fundacional) y dos nodos azules en la base (era Web), conectados en triángulo.
  Referenciado en `index.html` como `<link rel="icon" type="image/svg+xml">`.
- `og-image.svg` — diseño fuente de la imagen Open Graph (1 200×630 px): franja ámbar superior,
  decoración de red de nodos a la derecha y contenido tipográfico a la izquierda con título,
  subtítulo y metadatos de la cronología.
- `og-image.png` — imagen Open Graph generada (1 200×630 px, RGBA) para previsualización en
  redes sociales y mensajería. Referenciada en las meta tags `og:image` y `twitter:image`.
- `scripts/generate-og.mjs` — script que convierte `og-image.svg` → `og-image.png` usando
  `@resvg/resvg-js`. Ejecutar con `bun run generate-og`.
- `@resvg/resvg-js ^2.6.2` añadido a `devDependencies`.
- Script `generate-og` añadido a `package.json`.

### Fixed

- Corregidas más de 90 erratas de acentuación y ortografía en el contenido visible de
  `index.html` (tildes en vocales tónicas, diéresis, eñes, formas verbales correctas).
  Los valores de datos Alpine.js (`data-period`, `data-category`, handlers `x-on:click`)
  no fueron modificados.
- Corregido protocolo de URL en todas las referencias canónicas del `<head>` de `index.html`:
  `https:/chronology.appsutiles.dev/` → `https://chronology.appsutiles.dev/` (canonical,
  og:url, og:image, twitter:image, JSON-LD url, JSON-LD SearchAction target).
- Corregida ortografía del párrafo de introducción y sección Estructura en `README.md`
  (`La pagina` → `La página`, `mas actual` → `más actual`, `los anos` → `los años`, etc.).

### Changed

- `README.md` — añadidos `favicon.svg`, `og-image.svg`, `og-image.png` y `scripts/` al
  árbol de estructura del proyecto y documentado el comando `bun run generate-og`.
