
# Manual de Inspeccionar

Accede al manual completo aquí:  
👉 [https://jerycoopv.github.io/docusaurus/manual-inspector/intro](https://jerycoopv.github.io/docusaurus/manual-inspector/intro)

## 📘 Descripción

Este proyecto contiene un manual interactivo creado con [Docusaurus](https://docusaurus.io/) que explica cómo utilizar la herramienta "Inspeccionar" del navegador. Está pensado para usuarios que quieran aprender a analizar, depurar y entender el contenido de una página web desde el navegador.

La documentación está organizada por secciones visuales y técnicas, incluyendo ejemplos con imágenes para una mejor comprensión.

---

## 🚀 Cómo clonar este repositorio

Para clonar este proyecto en tu máquina local, abre una terminal y ejecuta:

```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd TU-REPO
```

Reemplaza `TU-USUARIO` y `TU-REPO` con tu nombre de usuario y el nombre real del repositorio.

---

## 🔧 Cómo levantar el proyecto en local

1. Instala Node.js si no lo tienes: [https://nodejs.org](https://nodejs.org)
2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Corre el servidor de desarrollo:

```bash
npm run start
```

La documentación estará disponible en [http://localhost:3000](http://localhost:3000)

---

## ☁️ Cómo subir el proyecto (opcional)

Si quieres desplegar tu documentación en un servidor o dominio como lo hice en  
[https://jerycoopv.github.io/docusaurus/manual-inspector/intro](https://jerycoopv.github.io/docusaurus/manual-inspector/intro), puedes seguir estos pasos:

1. Construye el proyecto:

```bash
npm run build
```

2. Sube la carpeta `build/` generada a tu servidor mediante FTP, cPanel o GitHub Pages, según tu configuración.

Si usas GitHub Pages, puedes configurar `docusaurus.config.js` y ejecutar:

```bash
GIT_USER=tu_usuario GIT_REPO=tu_repo npm run deploy
```

---

## 📩 Contacto

Si tienes dudas o sugerencias, no dudes en crear un issue o contactarme.
