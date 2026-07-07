# xcomsistemas-web

Sitio estático (HTML/CSS/JS puro, sin build step) para xcomsistemas.com.uy.

## Estructura
```
xcomsistemas-web/
├── index.html
├── css/styles.css
├── js/signal.js      → animación del hero (osciloscopio, canvas)
├── js/main.js         → nav scroll + menú móvil
├── assets/            → logo (SVG)
├── CNAME              → dominio custom para GitHub Pages
└── README.md
```

## Deploy en GitHub Pages

1. Creá el repo `xcomsistemas-web` en tu cuenta de GitHub (público).
2. Subí todo el contenido de esta carpeta a la rama `main`.
3. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
4. En el DNS de tu dominio (donde administrás xcomsistemas.com.uy), agregá 4 registros A apuntando a:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Opcional, para www: CNAME `www` → `TU-USUARIO.github.io`.
5. Esperá propagación DNS (minutos a 24hs). HTTPS se activa solo.

## Pendiente antes de publicar

- [ ] Reemplazar `assets/xcomsistemas_logo_light.svg` y `assets/xcomsistemas_icon.svg` por las versiones finales exportadas de Claude Design (si son distintas a estas).
- [ ] Sección **Educación y certificaciones** (`index.html`, id `formacion`): tiene contenido de referencia, marcado con `<!-- EDITAR -->`. Confirmar qué certificaciones/formación mostrar públicamente.
- [ ] Sección **Testimonios**: tiene una cita de ejemplo. Reemplazar por un testimonio real o quitar la sección si no hay uno todavía.
- [ ] `mailto:contacto@xcomsistemas.com.uy` — confirmar la casilla real una vez definido el email con Zoho Mail / Google Workspace.
- [ ] Reemplazar `TU-PERFIL` en el link de LinkedIn (sección Contacto).
