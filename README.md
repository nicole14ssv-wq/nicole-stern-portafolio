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

Secciones provisionales: Inicio, Sobre mí, Obra, Proyectos, Exposiciones, Publicaciones y Contacto. La identidad usa borgoña, blanco y marfil, con fuentes locales del sistema. No hay solicitudes a servicios tipográficos externos.

Se utiliza `HashRouter`: las rutas aparecen después de `#` y funcionan en alojamiento estático sin reglas de reescritura. Para publicar en un subdirectorio, configura el `base` de Vite para ese destino antes de compilar. La publicación en GitHub Pages aún no está configurada.

## Git y colaboración

Se versiona `package-lock.json`; utiliza `npm ci` para instalaciones reproducibles. `.npmrc` ubica la caché en `/tmp/nicole-npm-cache`, compatible con el entorno cloud. `node_modules/` y `dist/` quedan excluidos de Git.

Revisa los cambios con `git diff` y añádelos a una rama para crear un commit y un pull request. No se incluyen credenciales.
