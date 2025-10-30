import { useEffect } from 'react';

export function SvgSprite() {
  useEffect(() => {
    const loadSprites = async () => {
      try {
        // Forma recomendada: usar ?raw en el patrón para obtener el contenido como string.
        // La ruta es relativa al archivo actual.
        const iconContext = import.meta.glob('../assets/icons/*.svg?raw', {
          eager: true,
        });
        const logoContext = import.meta.glob('../assets/logos/*.svg?raw', {
          eager: true,
        });

        const allModules = { ...iconContext, ...logoContext };

        const sprites = Object.entries(allModules).map(([path, rawSvg]) => {
          // Extraer nombre del archivo sin extensión como id
          const id = path
            .split('/')
            .pop()
            .replace('.svg?raw', '')
            .replace('.svg', '');
          return rawSvg
            .replace(/<svg([^>]*)>/i, `<symbol id="${id}"$1>`)
            .replace(/<\/svg>/i, '</symbol>');
        });

        const spriteSheet = document.createElement('div');
        spriteSheet.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            ${sprites.join('')}
          </svg>
        `;
        const svgEl = spriteSheet.firstElementChild;
        if (svgEl) document.body.insertBefore(svgEl, document.body.firstChild);
      } catch (error) {
        console.error('Error loading SVG sprites:', error);
      }
    };

    loadSprites();
  }, []);

  return null;
}
