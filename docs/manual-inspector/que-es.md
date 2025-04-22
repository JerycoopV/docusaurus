---
id: que-es
title: ¿Qué es el Inspector de Navegador?
---

## Definición Completa
El **Inspector de Navegador** (DevTools) es un conjunto integrado de herramientas de desarrollo incluido en navegadores modernos (Chrome, Firefox, Edge, Safari) que permite:

- 🔎 **Inspeccionar** y modificar el código fuente en vivo
- 🛠 **Depurar** errores en HTML, CSS y JavaScript
- ⚡ **Analizar** el rendimiento y consumo de recursos
- 📱 **Simular** dispositivos móviles y condiciones de red

## Características Clave
| Función | Descripción | Acceso Rápido |
|---------|-------------|----------------|
| **Elements** | Editor de DOM/CSS en tiempo real | `Ctrl+Shift+C` |
| **Console** | Terminal JavaScript y registro de errores | `Ctrl+Shift+J` |
| **Network** | Monitor de peticiones HTTP/HTTPS | `Ctrl+Shift+E` |
| **Sources** | Depurador de código fuente | `F1` para atajos |
| **Performance** | Analizador de velocidad | `Ctrl+Shift+P` |

## ¿Cómo funciona técnicamente?
1. **Intercepta** el rendering del navegador
2. **Crea un espejo** del DOM real
3. **Expone** las APIs del navegador
4. **Permite modificaciones** no destructivas (solo en tu sesión)

## Ejemplo Práctico
```html
<!-- Antes de la modificación -->
<button class="btn">Enviar</button>

<!-- Después de editarlo en el Inspector -->
<button class="btn-primary" style="padding: 12px 24px;">Enviar ahora</button>