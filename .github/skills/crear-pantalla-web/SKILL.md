---
name: crear-pantalla-web
description: 'Construye una serie de pantallas web estáticas y responsive (HTML + CSS + JavaScript puro, sin frameworks) para la app "Billetera Digital", pensadas para demostrarse en una presentación de hackatón dentro de un emulador de celular. Usar cuando se pida crear, agregar o corregir pantallas/páginas web de la app a partir de instrucciones, con estilo alegre y juvenil, en castellano, sin scroll, con icono de carga de 0,5 s y foco automático en el primer campo.'
---

# Crear pantallas web — Billetera Digital

Recibe instrucciones (texto libre) que describen una o varias pantallas de la app **Billetera Digital** y produce una carpeta de páginas estáticas listas para abrir en el navegador y mostrar en una demo de hackatón. Cada pantalla es un archivo `.html`; todas comparten el mismo `app.css` y `app.js`.

## Reglas fijas (no negociables)

1. **Tecnología**: solo HTML, CSS y JavaScript puro. Sin frameworks, sin build, sin CDN ni fuentes/iconos externos (la demo debe funcionar sin internet). Iconos como SVG inline de trazo (estilo Lucide).
2. **Nombre**: la app se llama **"Billetera Digital"** (`<title>`: `Billetera Digital · <Pantalla>`).
3. **Idioma**: todo el texto visible, `alt`, `aria-label`, mensajes y `lang="es"` en castellano. Tono cercano, tuteo ("Ingresa tu DNI"). Moneda en soles (`S/`), formato `es-PE`.
4. **Estilo**: colores alegres y juveniles (violeta, rosa, turquesa, amarillo sobre fondo claro), esquinas redondeadas, mucho aire. **No recargado y fácil de usar**: una acción principal por pantalla, textos cortos, botones grandes.
5. **Emulador de celular**: la app se muestra dentro de un teléfono simulado (carcasa, cámara frontal, barra de estado con hora, indicador de inicio) centrado en el navegador. **Todo el contenido solicitado va únicamente dentro de la "pantalla" del celular** (`.pantalla` › `.app`); nada de contenido fuera del marco. El teléfono se escala a la altura de la ventana (máx. 900 px) para caber siempre completo. En un dispositivo real de ancho ≤ 500 px el marco se oculta y la app ocupa toda la pantalla (responsive). Siempre incluir `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.
6. **Sin scroll**: ninguna pantalla debe hacer scroll vertical ni horizontal (`html, body { overflow: hidden }` ya viene en `app.css`). Para lograrlo: pocos elementos por pantalla (máx. ~4 bloques), tamaños con `clamp()`/`cqh` (ya definidos respecto a la pantalla del celular), y si el contenido no cabe, **dividir en dos pantallas** (pasos) en lugar de permitir scroll. Listas largas: mostrar solo los 2–3 primeros elementos y un botón "Ver todo".
7. **Carga de 0,5 s**: al abrir cualquier pantalla y al pulsar cualquier botón/enlace debe verse el icono de carga (spinner) durante 500 ms sobre la pantalla del celular, para simular demora. Lo hace `app.js` con el bloque `.loader`; no reimplementarlo por pantalla.
8. **Foco inicial**: al terminar la carga, el cursor queda en el primer campo (`input`, `select` o `textarea`) de la pantalla. Si debe ser otro, marcarlo con `data-foco`. En pantallas sin campos no hay foco.
9. **Corrección de pantallas**: si se pide corregir/cambiar un campo, texto, color o comportamiento de una pantalla, **editar solo el archivo de esa pantalla** (edición puntual, no regenerar). Tocar `app.css`/`app.js` únicamente si el cambio es global (afecta a todas) o si el defecto está ahí. Mantener intactas las demás pantallas y los nombres de archivo.

## Estructura de salida

En el workspace, carpeta `app/` (si el usuario no indica otra):

```
app/
  index.html            ← primera pantalla (ingreso / bienvenida)
  <nombre>.html         ← una por pantalla, nombres en kebab-case y castellano
  assets/
    app.css             ← copiado de este skill (solo si no existe ya)
    app.js              ← copiado de este skill (solo si no existe ya)
```

Las pantallas siguen un orden de flujo con prefijo numérico opcional (`02-panel.html`) o nombres descriptivos (`transferir.html`); usar uno u otro de forma consistente en toda la carpeta. Las plantillas usan prefijo numérico; `index.html` es la primera.

## Flujo de trabajo

1. **Leer las instrucciones** y listar las pantallas, sus campos, botones y a qué pantalla lleva cada acción. Si falta algo imprescindible (p. ej. a dónde navega un botón), asumir lo más razonable para una demo; preguntar solo si hay ambigüedad que cambie el flujo.
2. **Preparar `app/assets/`**: copiar [assets/app.css](./assets/app.css) y [assets/app.js](./assets/app.js) si no existen. Si ya existen, no sobrescribir.
3. **Crear cada pantalla** partiendo de la plantilla más cercana de [templates/](./templates) (ver tabla) y reemplazando solo el contenido de `.app` (dentro de `.pantalla`). Mantener intactos `<head>`, el marco del celular (`.telefono`, `.isla`, `.barra-estado`, `.indicador-inicio`), el bloque `.loader` y el `<script src="assets/app.js">`. Esqueleto de cada página:

   ```html
   <body>
   <div class="telefono">
     <div class="pantalla">
       <div class="isla"></div>
       <div class="barra-estado">…hora e iconos…</div>
       <div class="app"> …contenido de la pantalla… </div>
       <div class="loader on">…spinner…</div>
       <div class="indicador-inicio"></div>
     </div>
   </div>
   <script src="assets/app.js"></script>
   ```
4. **Enlazar el flujo** con `data-ir` / `href` (ver convenciones).
5. **Verificar**: abrir cada página en el navegador (o render headless) en escritorio (1920×1080 y 1280×720) comprobando que el celular se ve completo y centrado, y en un ancho móvil (≤ 500 px, p. ej. dentro de un iframe de 390×700) sin marco. En todos: sin scroll en ambos ejes, sin texto cortado, contenido solo dentro de la pantalla del celular, spinner de 0,5 s, foco en el primer campo y navegación correcta. No dar la tarea por terminada sin esta revisión.

## Plantillas

| Archivo | Uso |
|---|---|
| `01-formulario.html` | Pantalla con campos y un botón principal (ingreso, registro, transferir) |
| `02-panel.html` | Pantalla de inicio/panel: saldo, accesos rápidos y últimos movimientos |

Para otros tipos (confirmación, comprobante, lista de contactos) combinar los componentes de `app.css`: `.card`, `.card.violeta`, `.campo`, `.btn` (`.rosa`, `.secundario`, `.texto`), `.atajo`, `.icono` (`.rosa`, `.turquesa`, `.amarillo`), `.lista` + `.item`, `.monto`, `.chip`, `.exito` (check de éxito), `.tabbar`, `.grid-2`/`.grid-3`, `.visor` (cámara simulada para escanear: `.visor.rostro`, estados `.escaneando`, `.listo`, `.error`, con `.marco`, `.barrido` y `.estado`), `.pasos` (indicador de pasos) y `input.pin` (clave numérica). El atributo `hidden` oculta elementos para alternar botones. No inventar colores fuera de las variables `:root`.

## Convenciones de `app.js`

- **Navegar**: `<a class="btn" href="pantalla.html">`, `<button data-ir="pantalla.html">` o `<form data-ir="pantalla.html">`. `data-ir="atras"` vuelve a la pantalla anterior.
- **Formularios**: el envío valida con atributos HTML (`required`, `pattern`, `type`), muestra el spinner 0,5 s y navega a `data-ir`. Sin `data-ir`, dispara el evento `enviado` en el formulario.
- **Botón sin navegación**: muestra el spinner 0,5 s y dispara el evento `accion` en el botón; escuchar con `addEventListener('accion', ...)` para actualizar la pantalla (p. ej. mostrar un aviso).
- **Datos entre pantallas** (demo): `BD.set('saldo', 1250)` / `BD.get('saldo', 0)` (sessionStorage) y `BD.soles(n)`. Un elemento con `data-bd="saldo" data-soles` se rellena solo con el valor guardado.
- Usar `inputmode`, `autocomplete="off"` y `maxlength` adecuados para móvil (p. ej. DNI de 8 dígitos, montos con `inputmode="decimal"`).

## Checklist de calidad

- [ ] Todo en castellano y con el nombre "Billetera Digital".
- [ ] Todo el contenido está dentro de la pantalla del emulador de celular.
- [ ] Sin scroll vertical ni horizontal en escritorio y en móvil.
- [ ] Spinner de 0,5 s al cargar y en cada botón/enlace.
- [ ] Cursor en el primer campo al entrar.
- [ ] Una acción principal clara por pantalla; sin elementos de más.
- [ ] Colores solo de las variables de `app.css`; sin recursos externos.
- [ ] El flujo completo se puede recorrer de `index.html` hasta la última pantalla.
