import { useEffect } from 'react';

export function SvgSprite() {
  useEffect(() => {
    const loadSprites = async () => {
      try {
        // Import all SVG files from the icons and logos directories
        const iconContext = import.meta.glob('/src/assets/icons/*.svg', { eager: true });
        const logoContext = import.meta.glob('/src/assets/logos/*.svg', { eager: true });
        
        const allModules = { ...iconContext, ...logoContext };
        
        const sprites = await Promise.all(
          Object.entries(allModules).map(async ([path, mod]) => {
            const response = await fetch(mod.default);
            const text = await response.text();
            // Extract filename without extension as the ID
            const id = path.split('/').pop().replace('.svg', '');
            return text
              .replace(/<svg([^>]*)>/, `<symbol id="${id}"$1>`)
              .replace('</svg>', '</symbol>');
          })
        );

        const spriteSheet = document.createElement('div');
        spriteSheet.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            ${sprites.join('')}
          </svg>
        `;
        
        document.body.appendChild(spriteSheet.firstElementChild);
      } catch (error) {
        console.error('Error loading SVG sprites:', error);
      }
    };

    loadSprites();
  }, []);

  return null;
}

// Usage example:
// <SvgSprite />  {/* Add this at the root of your app */}
// Then use SVGs like this:
// <svg><use href="#icon-name" /></svg>