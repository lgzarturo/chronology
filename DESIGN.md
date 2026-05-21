# DESIGN.md - Lineamientos de Diseno del Proyecto

> Proyecto: Cronologia de Internet y la World Wide Web
> Stack objetivo: HTML, TailwindCSS, Alpine.js, Phosphor Icons

Este documento define los estandares visuales, de interaccion y de implementacion para la pagina web mobile-first de la cronologia de Internet. Toma `theme.md` como fuente base y adapta sus reglas al contexto especifico de una experiencia historica, tecnica y navegable.

---

## 1. Principio Visual

### Brutal Clarity aplicada a historia tecnica

La pagina debe presentar una historia compleja sin convertirla en ruido visual. Cada bloque, icono, color y animacion debe ayudar al usuario a entender que ocurrio, cuando ocurrio, quien participo y por que importo.

**Reglas rectoras:**

| Principio | Estandar |
|---|---|
| Claridad sobre decoracion | No usar sombras, glassmorphism, fondos ornamentales ni gradientes. |
| Dark-mode exclusivo | La experiencia se disena solo en modo oscuro. No existe variante clara. |
| Bordes rectos | `border-radius: 0` en cards, botones, inputs, chips y paneles. |
| Mobile-first real | El layout base debe funcionar desde 320px. Desktop es una mejora progresiva. |
| Densidad legible | Mostrar informacion historica con jerarquia clara, no con bloques decorativos. |
| Movimiento funcional | Las animaciones orientan o confirman cambios de estado; no distraen. |

---

## 2. Paleta de Color

Usar siempre tokens o clases centralizadas. No usar valores hex directos dentro del HTML salvo en la configuracion inicial de Tailwind.

### Colores base

| Token sugerido | Hex | Uso |
|---|---:|---|
| `background` | `#0f172a` | Fondo principal de la pagina. |
| `surface` | `#1e293b` | Paneles, cards de eventos, drawer o modal. |
| `text-primary` | `#e2e8f0` | Titulos y texto principal. |
| `text-secondary` | `#94a3b8` | Fechas secundarias, fuentes, notas y metadatos. |
| `border` | `#334155` | Lineas de timeline, divisores y bordes. |

### Colores semanticos

Los acentos deben comunicar categoria historica, no decorar.

| Token sugerido | Hex | Uso |
|---|---:|---|
| `era-foundation` | `#f59e0b` | Investigacion temprana, ARPA, packet switching. |
| `era-web` | `#3b82f6` | Web, navegadores, W3C, HTML, HTTP. |
| `era-platform` | `#10b981` | Nube, mobile, plataformas, cifrado. |
| `era-conflict` | `#ef4444` | Regulacion, antitrust, privacidad, riesgos. |

**Regla:** los colores cromaticos solo aparecen como borde, texto, linea de tiempo, icono o indicador de categoria. No deben convertirse en fondos grandes.

---

## 3. Tipografia

El proyecto usa dos familias con roles estrictos.

| Familia | Uso |
|---|---|
| Inter | Lectura principal, titulos, parrafos, eventos historicos. |
| JetBrains Mono | Fechas, anos, etiquetas, filtros, nombres de protocolos, CTAs y metadatos. |

### Escala recomendada

| Contexto | Tailwind |
|---|---|
| H1 | `text-4xl sm:text-5xl font-bold tracking-tight` |
| Bajada principal | `text-lg sm:text-xl text-text-secondary` |
| Titulo de periodo | `text-2xl sm:text-3xl font-bold` |
| Titulo de evento | `text-xl font-bold` |
| Cuerpo | `text-base leading-7` |
| Fecha / ano | `text-xs font-mono uppercase tracking-wide` |
| Filtro / etiqueta | `text-xs font-mono uppercase tracking-wide` |
| CTA | `text-sm font-mono font-medium` |

No usar tracking negativo. La densidad debe resolverse con jerarquia, espaciado y longitud de linea.

---

## 4. Layout Mobile First

La estructura base es una pagina vertical de lectura con navegacion por periodos.

### Container

```html
<main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

| Breakpoint | Uso |
|---|---|
| Base | Mobile desde 320px. Una columna. |
| `sm:` | Mejora para tablets. Puede activar dos columnas solo en bloques secundarios. |
| `lg:` | Desktop. Puede mostrar indice lateral, mayor densidad y timeline alternada. |

No usar `md:` salvo necesidad puntual documentada. El salto principal es base -> `sm:` -> `lg:`.

### Estructura de pagina

1. Header compacto con titulo del proyecto y controles principales.
2. Hero informativo, no comercial.
3. Resumen ejecutivo breve.
4. Filtros por periodo o categoria.
5. Timeline cronologica.
6. Secciones de contexto o glosario.
7. Footer con fuentes y creditos.

El primer viewport debe dejar claro que el sitio es una cronologia historica de Internet, no una landing generica.

---

## 5. Componentes

### Timeline

La timeline es el componente central del proyecto.

**Mobile:**

- Una sola columna.
- Linea vertical a la izquierda.
- Cada evento se presenta como bloque apilado.
- La fecha aparece arriba del titulo, en mono.
- El icono se alinea con el nodo de la linea.

**Desktop (`lg:`):**

- Mantener lectura vertical.
- Se permite indice lateral sticky por periodos.
- No alternar izquierda/derecha si reduce escaneabilidad.

### Event Card

Cada evento debe responder rapidamente a cuatro preguntas:

1. Cuando ocurrio.
2. Que paso.
3. Quienes participaron.
4. Por que importo.

Estructura recomendada:

```html
<article class="border border-border bg-surface p-5">
  <p class="font-mono text-xs uppercase tracking-wide text-text-secondary">1969</p>
  <h3 class="mt-2 text-xl font-bold text-text-primary">Nace ARPANET</h3>
  <p class="mt-3 text-base leading-7 text-text-primary">...</p>
  <dl class="mt-4 grid gap-3 text-sm">
    ...
  </dl>
</article>
```

### Period Header

Cada periodo historico debe tener:

- Rango temporal.
- Nombre corto.
- Sintesis de una o dos frases.
- Color semantico de periodo aplicado como borde o icono.

### Filtros

Los filtros deben ser botones con estado claro:

- Base: borde y texto del color correspondiente.
- Activo: fondo del color correspondiente y texto `bg-background`.
- Inactivo: `opacity-70`, nunca oculto si el usuario necesita entender el conjunto.

Usar Alpine.js para estado de filtros, busqueda local, acordeones y modales.

### Fuentes y citas

Las fuentes no deben dominar la lectura. Mostrar referencias en un bloque discreto al final del evento o en un panel expandible.

---

## 6. Iconografia con Phosphor Icons

Phosphor Icons se usa para reforzar categorias, acciones y navegacion.

### Estilo

| Uso | Peso recomendado | Tamano |
|---|---|---|
| Categoria de evento | `regular` o `bold` | `20px` / `size-5` |
| Acciones de UI | `regular` | `20px` / `size-5` |
| Hero o periodo destacado | `regular` | `28px` / `size-7` |

### Iconos sugeridos

| Contexto | Icono |
|---|---|
| Internet / redes | `ph-network` |
| Web / documentos | `ph-globe` o `ph-browser` |
| Protocolos / estandares | `ph-code` |
| Gobernanza | `ph-buildings` |
| Seguridad / privacidad | `ph-lock-key` |
| Nube / plataformas | `ph-cloud` |
| Busqueda | `ph-magnifying-glass` |
| Filtros | `ph-funnel` |
| Expandir / contraer | `ph-caret-down` |
| Enlace externo | `ph-arrow-square-out` |

Los iconos nunca reemplazan texto critico. Siempre deben tener `aria-hidden="true"` cuando son decorativos o una etiqueta accesible cuando representan una accion.

---

## 7. Interactividad con Alpine.js

Alpine.js debe cubrir interacciones locales y pequeñas. No debe convertirse en una arquitectura de aplicacion compleja.

### Usos permitidos

| Caso | Alpine.js |
|---|---|
| Filtros por periodo o categoria | Si |
| Busqueda local en eventos cargados en HTML | Si |
| Acordeones de fuentes o detalles | Si |
| Drawer / menu mobile | Si |
| Modal de fuente o glosario | Si |
| Router, fetch complejo o estado global pesado | No |

### Reglas

- Usar funciones nombradas: `function timelineFilters() { return {...} }`.
- Evitar objetos grandes inline en `x-data`.
- Usar `x-cloak` donde pueda existir parpadeo visual.
- Mantener el contenido importante presente en HTML aunque Alpine mejore la experiencia.
- No bloquear lectura si JavaScript falla.

---

## 8. Animaciones

Las animaciones deben ser cortas, sobrias y orientadas a estado.

| Uso | Duracion |
|---|---|
| Hover de botones | `duration-100` |
| Mostrar / ocultar acordeon | `duration-150` |
| Drawer o modal | `duration-150` |
| Resaltado de evento filtrado | `duration-150` |

### Permitido

- `transition-colors`
- `transition-opacity`
- `transition-transform` en elementos pequenos
- `x-transition` para paneles Alpine
- Scroll suave solo para saltos internos de navegacion

### No permitido

- Parallax.
- Scroll-jacking.
- Animaciones infinitas ornamentales.
- Escalado grande de cards o secciones completas.
- Gradientes animados.

---

## 9. Accesibilidad

La pagina debe ser legible, navegable y comprensible sin depender del color.

- Mantener contraste AA o superior.
- Todo control interactivo debe tener estado `focus-visible`.
- No usar `outline-none` sin reemplazo visible.
- La timeline debe ser HTML semantico: `section`, `article`, `time`, `h2`, `h3`.
- Los filtros deben usar `button`, no `div`.
- Los paneles expandibles deben exponer estado con `aria-expanded`.
- Los modales deben usar `role="dialog"`, `aria-modal="true"` y cierre con Escape.
- Los iconos decorativos deben usar `aria-hidden="true"`.

---

## 10. Contenido y Tono

El tono debe ser tecnico, directo y explicativo. La cronologia puede tener opinion editorial, pero no debe perder precision.

### Reglas de contenido

- Distinguir claramente Internet y World Wide Web.
- Evitar mitos de "un solo inventor".
- Priorizar fechas, actores, instituciones e impacto.
- Separar infraestructura, Web, gobernanza, plataformas y regulacion.
- Usar lenguaje directo, no marketing.
- Explicar siglas la primera vez que aparecen.

### Formato de eventos

Cada evento importante debe incluir:

- Fecha o rango.
- Titulo corto.
- Descripcion concisa.
- Personas clave.
- Instituciones o empresas.
- Impacto tecnico o social.
- Fuente o referencia.

---

## 11. TailwindCSS

Tailwind debe expresar el sistema visual, no improvisarlo por componente.

### Configuracion esperada

Definir tokens para:

- Colores base.
- Colores de era.
- Familias tipograficas.
- Max width de contenido.
- Estados de foco.

### Reglas de implementacion

- Usar clases utilitarias con patrones repetibles.
- Extraer componentes HTML solo cuando haya repeticion real.
- No usar estilos inline salvo valores dinamicos justificados.
- No introducir librerias de UI.
- Mantener patrones de borde, padding y tipografia consistentes.

---

## 12. Checklist de Componentes

Antes de considerar terminado un componente o seccion:

- [ ] Funciona desde 320px sin overflow horizontal.
- [ ] Usa dark-mode exclusivo.
- [ ] Usa tokens o clases estandarizadas, no hex directos dispersos.
- [ ] No usa sombras, gradientes ni glassmorphism.
- [ ] Mantiene `border-radius: 0`.
- [ ] Usa Inter para lectura y JetBrains Mono para metadatos.
- [ ] Los iconos Phosphor tienen tamano, peso y accesibilidad correctos.
- [ ] Los controles tienen `focus-visible`.
- [ ] Alpine.js no oculta contenido esencial si falla JavaScript.
- [ ] Las animaciones duran 150ms o menos.
- [ ] La informacion historica mantiene fecha, evento, actores e impacto.

---

## 13. Definicion de Hecho Visual

Una pantalla o componente cumple el sistema de diseno cuando:

1. La lectura principal es clara en mobile.
2. La jerarquia permite escanear fechas y eventos sin esfuerzo.
3. Los colores tienen significado historico o funcional.
4. La interaccion mejora la exploracion, no reemplaza el contenido.
5. El resultado se siente tecnico, sobrio y preciso.

