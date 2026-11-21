# Tarjeta de egreso · Mateo David Rodríguez Zamora

Invitación virtual animada (sobre que se abre) para el egreso del **martes 1 de diciembre de 2026, 19:00 hs**.
Es HTML/CSS/JS puro: no necesita instalar nada.

- `index.html` → la tarjeta final.
- `propuestas/` → los 4 diseños que se evaluaron (abrir `propuestas/index.html`).

## Publicar en GitHub Pages

1. Crear un repositorio público en GitHub (`TarjetaInvitacion`).
2. Subir este proyecto:
   ```bash
   git remote add origin https://github.com/LucasSanjua/TarjetaInvitacion.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** y guardar.
4. En un minuto queda online en https://lucassanjua.github.io/TarjetaInvitacion/.

## Cosas para editar en `index.html`

- **Lugar y botón "Cómo llegar":** buscar `place` (el link de Google Maps está en `map-btn`).
- **Hora / fecha de la cuenta regresiva:** buscar `2026-12-01T19:00:00-03:00`.
- **Colores:** variables al inicio de `assets/css/invitacion.css` (`--emerald`, `--gold`, …).

## Estructura

- `index.html` contiene la invitación y los metadatos para compartir.
- `assets/css/invitacion.css` contiene los estilos y las animaciones.
- `assets/js/invitacion.js` controla la apertura y la cuenta regresiva.
- `favicon-sobre.png` y `portada-whatsapp.jpg` son el icono y la imagen para compartir.
- `propuestas/` conserva los diseños de la etapa de comparación.

La cuenta regresiva toma la fecha del atributo `datetime` de `event-date` en `index.html`.
