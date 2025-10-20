import TechnologiesLogo from '../assets/icons/thunder.svg';
import HtmlLogo from '../assets/logos/html5.svg';
import CssLogo from '../assets/logos/css.svg';
import FigmaLogo from '../assets/logos/figma.svg';
import TailwindLogo from '../assets/logos/tailwindcss.svg';
import JSLogo from '../assets/logos/javascript.svg';
import VueLogo from '../assets/logos/vue.svg';
import ReactLogo from '../assets/logos/react_dark.svg';
import { useState } from 'react';

export function Technologies() {
  const tabs = [
    {
      id: 'frontend',
      label: 'Frontend',
    },
    {
      id: 'backend',
      label: 'Backend',
    },
    {
      id: 'tools',
      label: 'Herramientas',
    },
    {
      id: 'learning',
      label: 'Aprendiendo',
    },
  ];

  const [active, setActive] = useState(tabs[0].id);

  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <article className='flex flex-col gap-6'>
      <div className='flex gap-2 items-end '>
        <img src={TechnologiesLogo} alt='About Logo' />
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          Tecnologias
        </h1>
      </div>
      <p className='text-p2-normal text-balance'>
        Algunas de las{' '}
        <span className='text-secondary-200'>tecnologias mas destacables</span>{' '}
        con las que me he familiarizado durante mi trayectoria por el mundo del
        desarrollo de software.
      </p>

      {/* Tabs */}
      <div className='text-sm font-medium text-center'>
        <ul
          className='flex flex-wrap -mb-px justify-between'
          role='tablist'
          aria-label='Tecnologias'
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <li key={tab.id}>
                <button
                  type='button'
                  role='tab'
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={
                    `text-p2-semibold inline-block py-4 rounded-t-lg ` +
                    (isActive
                      ? 'text-primary-200 border-b-2 border-primary-200'
                      : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300')
                  }
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Tab panel - content changes depending on active tab (static/different structure per tab) */}
      <div className='mt-4'>
        <div
          role='tabpanel'
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className='flex flex-col gap-4'
        >
          {/* Render different static structures depending on tab id */}
          {activeTab.id === 'frontend' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#E34F26]/50 border-[#E34F26] '>
                  <img src={HtmlLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>HTML</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#663399]/50 border-[#663399] '>
                  <img src={CssLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>CSS</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#41B883]/50 border-[#41B883] '>
                  <img src={VueLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Vue</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#58C4DC]/50 border-[#58C4DC] '>
                  <img src={ReactLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>React</p>
                </div>
                <div className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#F0DB4F]/50 border-[#F0DB4F] '>
                  <img src={JSLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>JavaScript</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#38BDF8]/50 border-[#38BDF8] '>
                  <img src={TailwindLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Tailwind CSS</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#FF7262]/50 border-[#FF7262] '>
                  <img src={FigmaLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Figma</p>
                </div>
              </div>
            </div>
          )}

          {activeTab.id === 'backend' && (
            <div className='flex flex-col gap-4'>
              {/* Static cards with short descriptions */}
              <div className='p-4 rounded-[12px] bg-neutral-900/30'>
                <h4 className='text-p1-semibold'>Node.js + Express</h4>
                <p className='text-p2-normal text-neutral-300'>
                  Desarrollo de APIs REST, middlewares, y despliegue en
                  servidores Linux. Experiencia con autenticación y testing.
                </p>
              </div>
              <div className='p-4 rounded-[12px] bg-neutral-900/30'>
                <h4 className='text-p1-semibold'>Bases de datos</h4>
                <p className='text-p2-normal text-neutral-300'>
                  Diseño y consultas con PostgreSQL y MongoDB. Uso de ORMs y
                  migraciones (Prisma).
                </p>
              </div>
            </div>
          )}

          {activeTab.id === 'tools' && (
            <div className='flex flex-col gap-3'>
              <div className='flex flex-wrap gap-3'></div>
              <p className='text-p2-normal text-neutral-300'>
                Flujo de trabajo: Git branches, PR reviews, contenedores con
                Docker y pruebas básicas con Jest.
              </p>
            </div>
          )}

          {activeTab.id === 'learning' && (
            <div className='flex flex-col gap-4'>
              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col'>
                  <div className='flex justify-between'>
                    <span>TypeScript</span>
                    <span className='text-p2-semibold'>En progreso</span>
                  </div>
                  <div className='h-2 bg-neutral-700 rounded-full mt-1 overflow-hidden'>
                    <div className='h-full bg-primary-500 w-3/4' />
                  </div>
                </li>
                <li className='flex flex-col'>
                  <div className='flex justify-between'>
                    <span>GraphQL</span>
                    <span className='text-p2-semibold'>Aprendiendo</span>
                  </div>
                  <div className='h-2 bg-neutral-700 rounded-full mt-1 overflow-hidden'>
                    <div className='h-full bg-primary-500 w-1/3' />
                  </div>
                </li>
              </ul>
              <p className='text-p2-normal text-neutral-300'>
                Temas que sigo explorando: Rust, Svelte y patrones de CQRS.
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
