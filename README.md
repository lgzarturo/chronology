# Cronología de Internet y la World Wide Web

Proyecto web estático que recopila, organiza y presenta una cronología sobre la historia de Internet y la World Wide Web. La pagina cuenta la historia de la fecha mas actual a la mas antigua para mostrar como los debates actuales sobre IA, privacidad, plataformas y regulación vienen de decisiones técnicas e institucionales tomadas desde los anos sesenta.

## Finalidad

El objetivo es ofrecer una referencia navegable para entender:

- La diferencia entre Internet como infraestructura de redes y la Web como aplicación construida sobre esa infraestructura.
- Los hitos técnicos que hicieron posible la red moderna: packet switching, ARPANET, TCP/IP, DNS, HTTP, HTML, navegadores, cifrado, nube y protocolos recientes.
- Las personas clave, como J.C.R. Licklider, Paul Baran, Donald Davies, Bob Taylor, Larry Roberts, Vint Cerf, Bob Kahn, Jon Postel, Paul Mockapetris, Tim Berners-Lee, Robert Cailliau, Ray Tomlinson, Brendan Eich, Larry Page, Sergey Brin y otros actores técnicos.
- Las instituciones y empresas que moldearon el ecosistema: DARPA, NSF, CERN, IETF, IANA, ICANN, W3C, NCSA, Microsoft, Google, AWS, Cloudflare, Apple, Meta, YouTube y otras.
- Las tensiones históricas entre apertura, estandarización, comercialización, concentración de poder, seguridad, privacidad y regulación.

## Contenido

La experiencia principal esta en `index.html` y contiene:

- Un resumen ejecutivo sobre Internet, la Web y sus capas de gobernanza.
- Una timeline descendente con 34 hitos, desde 2025-2026 hasta 1960-1962.
- Filtros por periodo histórico y categoría.
- Búsqueda local por persona, empresa, protocolo o evento.
- Tarjetas con fecha, descripción, personas clave, organizaciones, impacto y fuentes.
- Una sección de actores estructurales para ubicar instituciones y empresas importantes.

El contenido histórico proviene del documento `cronologia-deep-research-internet-report.md`.

## Stack

- HTML estático.
- TailwindCSS para estilos.
- Alpine.js para filtros, búsqueda, menú móvil y estados locales.
- Phosphor Icons para iconografía.
- Bun como runtime y gestor de dependencias.

## Estructura

```text
.
├── index.html
├── cronologia-deep-research-internet-report.md
├── DESIGN.md
├── theme.md
├── package.json
├── bun.lock
├── src/
│   └── input.css
└── dist/
    └── output.css
```

## Uso local

Instalar dependencias:

```bash
bun install
```

Generar el CSS estático:

```bash
bun run build
```

Verificar el proyecto:

```bash
bun run verify
```

Para iterar estilos durante desarrollo:

```bash
bun run watch
```

El sitio puede abrirse directamente desde `index.html` en el navegador porque el CSS compilado se conserva en `dist/output.css`.

## Lineamientos de diseño

La interfaz sigue `DESIGN.md`: modo oscuro exclusivo, claridad visual, bordes rectos, sin sombras ni gradientes decorativos, layout mobile-first y uso de colores semánticos para distinguir fundación técnica, Web, plataformas y conflictos de gobernanza.
