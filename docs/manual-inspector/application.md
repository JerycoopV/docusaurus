## 📦 ¿Qué es la pestaña Application?
La pestaña **Application** permite gestionar y analizar los recursos que una página web almacena localmente en el navegador del usuario.

## 📌 ¿Qué puedes ver o modificar aquí?

- **Cookies**: Datos que las páginas guardan para recordar información entre sesiones.
- **Local Storage y Session Storage**: Datos almacenados localmente que no se envían al servidor.
- **IndexedDB**: Base de datos local en el navegador para almacenar grandes cantidades de datos estructurados.
- **Cache Storage**: Recursos almacenados por aplicaciones PWA (Progressive Web Apps).
- **Manifest**: Archivo JSON con información de configuración de la app web.

## 🛠 Uso común

- Revisar si una cookie fue correctamente creada.
- Eliminar almacenamiento local cuando una app no funciona bien.
- Ver recursos guardados por PWA y limpiarlos.

## 📌 Ejemplo práctico

Para eliminar todas las cookies de un sitio:

1. Abre DevTools (`F12`)
2. Ve a **Application → Cookies**
3. Haz clic derecho sobre el dominio
4. Selecciona **Clear**

---

## ✅ Resumen

| Elemento          | Uso                                          |
|:-----------------|:--------------------------------------------|
| Cookies           | Guarda datos de sesión o preferencias        |
| Local Storage     | Almacena datos permanentes del navegador     |
| Session Storage   | Almacena datos temporales por sesión         |
| IndexedDB         | Base de datos local para aplicaciones web    |
| Cache Storage     | Recursos guardados para apps sin conexión    |
| Manifest          | Configura iconos, nombre y comportamiento PWA|
