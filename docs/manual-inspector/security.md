## 🔐 ¿Qué es la pestaña Security?
La pestaña **Security** en las DevTools permite revisar el estado de seguridad de la conexión entre el navegador y el servidor.

## 📌 ¿Para qué se usa?

- Verificar si la conexión es HTTPS segura
- Consultar detalles del certificado SSL
- Detectar recursos inseguros mezclados (mixed content)
- Identificar advertencias de seguridad

## 📊 Elementos que muestra

- **URL**: Dominio actual
- **Certificate**: Información del certificado SSL/TLS
- **Connection**: Tipo de encriptación y seguridad de la conexión
- **Resources**: Indica si hay recursos cargados desde HTTP en un sitio HTTPS

## 📌 Ejemplo práctico

1. Abre DevTools (`F12`)
2. Ve a **Security**
3. Verifica que aparezca un candado verde
4. Haz click en **View certificate** para ver detalles como:

- Fecha de expiración
- Organización emisora
- Dominio válido

## ✅ Consejos

- Siempre usa HTTPS en producción
- Configura certificados SSL válidos y actualizados
- Evita cargar recursos HTTP en sitios HTTPS para no romper la seguridad
