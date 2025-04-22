module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Manual de Uso',
      items: [
        {
          type: 'doc',
          id: 'manual-inspector/intro',
          label: '📘 Introducción',
        },
        {
          type: 'category',
          label: '🧭 ¿Qué es el Inspector de Navegador?',
          items: [
            'manual-inspector/que-es',
            'manual-inspector/para-que-sirve',
            'manual-inspector/como-usarlo',
          ],
        },
        {
          type: 'category',
          label: '🧰 Barra de Pestañas de las DevTools',
          items: [
            {
              type: 'doc',
              id: 'manual-inspector/introduccion-devtools',
              label: '📘 Introducción',
            },
            {
              type: 'doc',
              id: 'manual-inspector/elements',
              label: '🔍 Elements',
            },
            {
              type: 'doc',
              id: 'manual-inspector/console',
              label: '📜 Console',
            },
            {
              type: 'doc',
              id: 'manual-inspector/sources',
              label: '💾 Sources',
            },
            {
              type: 'doc',
              id: 'manual-inspector/network',
              label: '🌐 Network',
            },
            {
              type: 'doc',
              id: 'manual-inspector/performance',
              label: '⏱️ Performance',
            },
            {
              type: 'doc',
              id: 'manual-inspector/application',
              label: '🗂️ Application',
            },
            {
              type: 'doc',
              id: 'manual-inspector/security',
              label: '🔒 Security',
            },
          ],
        },
        {
          type: 'category',
          label: '📈 ¿Por Qué es Importante el Inspector de Navegador?',
          items: [
            'manual-inspector/importancia',
          ],
        },
      ],
    },
  ],
};
