import { useState } from 'react';
import { logos } from '@/assets/logos';
import { TechBox } from '@/components/common/TechBox';

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

export function TechnologyTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <>
      {/* Tabs */}
      <div className='text-sm font-medium text-center'>
        <ul
          className='flex flex-wrap -mb-px justify-between'
          role='tablist'
          aria-label='Algunas de las Tecnologias con las que he tenido contacto'
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
                  className={`text-small md:text-lg font-semibold inline-block py-4 rounded-t-lg cursor-pointer relative 
                    ${
                      isActive
                        ? 'text-primary-200'
                        : 'text-nuetral-500 hover:text-primary-50'
                    }
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-primary-50 after:transform after:scale-x-0 after:transition-transform 
                    ${
                      isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                    }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Tab panel - content changes depending on active tab */}
      <div className='mt-4'>
        <div
          role='tabpanel'
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className='flex flex-col gap-4 h-92 cursor-pointer'
        >
          {activeTab.id === 'frontend' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='HTML' hex='#E34F26' logo={logos.html} />
                <TechBox text='CSS' hex='#663399' logo={logos.css} />
              </div>
              <div className='flex gap-2'>
                <TechBox text='Vue' hex='#41B883' logo={logos.vue} />
                <TechBox text='React' hex='#58C4DC' logo={logos.react} />
                <TechBox
                  text='JavaScript'
                  hex='#F0DB4F'
                  logo={logos.javascript}
                />
              </div>
              <div className='flex gap-2'>
                <TechBox
                  text='Tailwind CSS'
                  hex='#38BDF8'
                  logo={logos.tailwind}
                />
                <TechBox text='Figma' hex='#FF7262' logo={logos.figma} />
              </div>
            </div>
          )}

          {activeTab.id === 'backend' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='Java' hex='#ED8B00' logo={logos.java} />
                <TechBox text='PHP' hex='#787CB5' logo={logos.php} />
                <TechBox text='Laravel' hex='#FF2D20' logo={logos.laravel} />
              </div>
              <div className='flex gap-2'>
                <TechBox text='MySQL' hex='#00758F' logo={logos.mysql} />
                <TechBox
                  text='PostgreSQL'
                  hex='#336791'
                  logo={logos.postgresql}
                />
              </div>
            </div>
          )}

          {activeTab.id === 'tools' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='VSCode' hex='#24ACF2' logo={logos.vscode} />
                <TechBox text='Git' hex='#DE4C36' logo={logos.git} />
                <TechBox text='GitHub' hex='#FFFFFF' logo={logos.github} />
              </div>
              <div className='flex gap-2'>
                <TechBox text='Terminal' hex='#FFFFFF' logo={logos.terminal} />
                <TechBox text='PyCharm' hex='#1FD592' logo={logos.pycharm} />
              </div>
              <div className='flex gap-2'>
                <TechBox text='Supabase' hex='#3ECF8E' logo={logos.supabase} />
                <TechBox text='Vite' hex='#41D1FF' logo={logos.vite} />
                <TechBox text='AWS' hex='#FF9900' logo={logos.aws} />
              </div>
              <div className='flex gap-2'>
                <TechBox text='Docker' hex='#008FE2' logo={logos.docker} />
                <TechBox text='npm' hex='#CB3837' logo={logos.npm} />
              </div>
            </div>
          )}

          {activeTab.id === 'learning' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='Python' hex='#FED444' logo={logos.python} />
                <TechBox text='Django' hex='#44b88b' logo={logos.django} />
                <TechBox text='GSAP' hex='#0AE448' logo={logos.gsap} />
              </div>
              <div className='flex gap-2'>
                <TechBox text='Node.js' hex='#3C873A' logo={logos.nodejs} />
                <TechBox
                  text='TypeScript'
                  hex='#3178C6'
                  logo={logos.typescript}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
