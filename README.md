# Nicole Stern · Portafolio artístico

Base técnica con React, TypeScript y Vite. Sin imágenes ficticias ni páginas definitivas.

## Requisitos y ejecución

Node.js 24 (ver `.nvmrc`) y npm. No requiere variables de entorno ni servicios externos.

```sh
npm ci
npm run dev
```

Abre la dirección que Vite muestra en tu terminal (habitualmente puerto 5173). En un entorno remoto utiliza su mecanismo de acceso a puertos.

```sh
npm run typecheck
npm run build
npm run preview
```

`build` valida TypeScript y genera `dist/`. `preview` sirve esa compilación (puerto 4173 por defecto); no es un servidor de producción.

## Estructura

- `src/main.tsx`: entrada y router.
- `src/App.tsx`: siete rutas y página de error.
- `src/components/Layout.tsx`: cabecera, navegación accesible y pie compartidos.
- `src/pages/sections.ts`: orden, nombres y rutas provisionales de las siete secciones.
- `src/pages/SectionPage.tsx`: plantilla provisional compartida; sustituir por páginas propias cuando se apruebe el diseño.
- `src/styles/tokens.css`: colores, tipografía y espaciado.
- `src/styles/base.css`: estilos globales y accesibilidad.
- `src/styles/layout.css`: estructura adaptable a móviles.
- `public/`: futuros recursos estáticos reales.

Secciones provisionales: Inicio, Sobre mí, Obra, Proyectos, Exposiciones, Publicaciones y Contacto. La identidad usa exclusivamente borgoña (`#722F45`), negro carbón (`#111113`) y blanco cálido (`#F4F0EB`). El fondo principal es carbón; los textos son blanco cálido y los elementos destacados e interactivos incorporan borgoña. Las animaciones respetan la preferencia de movimiento reducido. La tipografía utiliza fuentes locales del sistema. No hay solicitudes a servicios tipográficos externos.

Se utiliza `HashRouter`: las rutas aparecen después de `#` y funcionan en alojamiento estático sin reglas de reescritura. Vite configura la ruta base `/nicole-stern-portafolio/` para GitHub Pages.

## Despliegue en GitHub Pages

En GitHub, selecciona **Settings → Pages → Build and deployment → Source: GitHub Actions**. Al incorporar el workflow a `main`, cada actualización de esa rama compilará y publicará `dist/` automáticamente. Los pull requests hacia `main` solo validan la compilación, sin publicar. También puedes ejecutar el workflow manualmente desde Actions sobre `main`.

El sitio se publicará en https://nicole14ssv-wq.github.io/nicole-stern-portafolio/. El despliegue utiliza los permisos de `GITHUB_TOKEN`, sin tokens personales. Revisa la ejecución de **Deploy portfolio to GitHub Pages** en Actions para confirmar la publicación.

## Git y colaboración

Se versiona `package-lock.json`; utiliza `npm ci` para instalaciones reproducibles. `.npmrc` ubica la caché en `/tmp/nicole-npm-cache`, compatible con el entorno cloud. `node_modules/` y `dist/` quedan excluidos de Git.

Revisa los cambios con `git diff` y añádelos a una rama para crear un commit y un pull request. No se incluyen credenciales.
