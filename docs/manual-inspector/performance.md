---
id: performance
title: Pestaña Performance
---

## 🚀 ¿Qué es la pestaña Performance?
La pestaña **Performance** de las DevTools es una herramienta para medir y analizar el rendimiento de una página web. Permite identificar cuellos de botella, tiempos de carga y procesos que consumen más recursos durante la navegación.

Ideal para optimizar la experiencia de usuario y mejorar el tiempo de carga de las páginas.

## 📊 ¿Para qué se usa?
- Analizar cuánto tarda en cargarse una página
- Detectar procesos que ralentizan la web
- Medir FPS y uso de memoria
- Ver qué scripts o recursos bloquean el renderizado

## 📌 ¿Cómo se usa?

1. Abre las **DevTools** (`F12` o `Ctrl+Shift+I`)
2. Ve a la pestaña **Performance**
3. Haz click en **Record**
4. Navega o ejecuta acciones en la página
5. Detén la grabación y analiza los resultados

## 📈 Partes del panel Performance

- **FPS (Frames por segundo)**: Rendimiento visual de la página.
- **CPU**: Procesamiento usado en distintas tareas.
- **Network**: Tiempo de carga de recursos.
- **Main**: Hilo principal del navegador donde se procesan la mayoría de tareas.
- **Timings**: Eventos como `DOMContentLoaded` y `Load Event`.

## 📊 Ejemplo de uso
Para detectar por qué una página carga lenta:

1. Haz click en **Record**
2. Recarga la página
3. Detén la grabación
4. Observa las áreas rojas y picos en el timeline: allí están los procesos más pesados.

## 📌 Consejos útiles

- Optimiza imágenes y reduce scripts pesados.
- Usa **lazy loading** para recursos secundarios.
- Evita procesos bloqueantes en el hilo principal (`Main`).

---

Con esta pestaña puedes detectar problemas de rendimiento en tiempo real y tomar decisiones para mejorar la experiencia del usuario y SEO de tu sitio.
