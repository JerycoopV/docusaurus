## 🔍 ¿Qué es la pestaña Sources?
El panel **Sources** es tu depurador profesional integrado en el navegador que permite:

- **Ver todos los archivos fuente** del sitio web (JS, CSS, HTML, imágenes y más)
- **Depurar código JavaScript** con breakpoints avanzados
- **Editar código temporalmente** para pruebas rápidas sin modificar archivos reales
- **Trabajar con source maps** (para TypeScript, SASS, LESS, etc.)
- **Guardar snippets** de código para reutilizarlos

---

## 🛠 Funciones principales

### 1️⃣ Depuración con Breakpoints

Permite pausar la ejecución del código en una línea específica para revisar variables y el flujo de ejecución.

#### 📌 Ejemplo:

```javascript
function calcularTotal() {
  const precio = 100; // Coloca aquí un breakpoint
  const iva = precio * 0.21;
  return precio + iva; // Y aquí puedes hacer un paso a paso
}
```

Cuando el navegador se detenga en un **breakpoint**, puedes inspeccionar:

- Valores de variables en ese momento
- Llamadas previas en la pila de ejecución (call stack)
- El flujo del código paso a paso (step over, step into, step out)

---

### 2️⃣ Vista de Archivos y Estructura de Carpetas

El panel izquierdo te muestra todos los archivos cargados por la página:

📁 `localhost`
- `index.html`
- `style.css`
- `app.js`
- `/images`
- `/libs`

Desde aquí puedes abrir cualquier archivo, ver su contenido y editarlo en tiempo real para pruebas.

---

### 3️⃣ Source Maps

Si usas tecnologías como **TypeScript**, **SCSS** o herramientas de empaquetado como **Webpack**, los **source maps** permiten que el navegador relacione el código original con el código transpilado o comprimido.

Así, en lugar de depurar un `bundle.js` de miles de líneas, verás el archivo original (por ejemplo `app.ts`).

---

### 4️⃣ Snippets

Son pequeños fragmentos de código JavaScript que puedes guardar y ejecutar desde cualquier pestaña del navegador.

#### 📌 Crear un Snippet:

1. Ve a la pestaña **Sources**
2. Abre la sección **Snippets**
3. Haz clic derecho → **New**
4. Escribe tu código y guárdalo.

#### 📌 Ejemplo:

```javascript
console.log("Hola desde un snippet personalizado 🚀");
```

Lo puedes ejecutar en cualquier momento sin cargar una nueva página.

---

## 📖 Resumen

| Función             | Descripción                                                      |
|:-------------------|:----------------------------------------------------------------|
| Breakpoints         | Pausa el código en puntos específicos                            |
| Call Stack          | Muestra el historial de funciones llamadas                       |
| Variables en vivo   | Visualiza y modifica variables en tiempo real                    |
| Source Maps         | Relaciona código comprimido/transpilado con su fuente original   |
| Snippets            | Guarda y ejecuta fragmentos de código desde el navegador         |

---

## ✅ Conclusión

La pestaña **Sources** es ideal para depuración profesional y pruebas rápidas en cualquier entorno web. Aprender a usarla eficientemente te permite detectar errores, analizar comportamientos y realizar pruebas sin modificar archivos en producción.
