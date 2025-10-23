import TechnologiesLogo from '@/assets/icons/thunder.svg';
import HtmlLogo from '@/assets/logos/html5.svg';
import CssLogo from '@/assets/logos/css.svg';
import FigmaLogo from '@/assets/logos/figma.svg';
import TailwindLogo from '@/assets/logos/tailwindcss.svg';
import JSLogo from '@/assets/logos/javascript.svg';
import VueLogo from '@/assets/logos/vue.svg';
import ReactLogo from '@/assets/logos/react_dark.svg';
import JavaLogo from '@/assets/logos/java.svg';
import PhpLogo from '@/assets/logos/php.svg';
import LaravelLogo from '@/assets/logos/laravel.svg';
import MysqlLogo from '@/assets/logos/mysql.svg';
import PostgreLogo from '@/assets/logos/postgresql.svg';
import VSLogo from '@/assets/logos/vscode.svg';
import GitLogo from '@/assets/logos/git.svg';
import GithubLogo from '@/assets/logos/github.svg';
import TerminalLogo from '@/assets/logos/bash.svg';
import PyCharmLogo from '@/assets/logos/pycharm.svg';
import SupabaseLogo from '@/assets/logos/supabase.svg';
import DockerLogo from '@/assets/logos/docker.svg';
import AwsLogo from '@/assets/logos/aws.svg';
import ViteLogo from '@/assets/logos/vitejs.svg';
import NpmLogo from '@/assets/logos/npm.svg';
import PythonLogo from '@/assets/logos/python.svg';
import TSLogo from '@/assets/logos/typescript.svg';
import GsapLogo from '@/assets/logos/gsap.svg';

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
          className='flex flex-col gap-4 h-72'
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
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#ED8B00]/50 border-[#ED8B00] '>
                  <img src={JavaLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Java</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#787CB5]/50 border-[#787CB5] '>
                  <img src={PhpLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>PHP</p>
                </div>
                <div className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#FF2D20]/50 border-[#FF2D20] '>
                  <img src={LaravelLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Laravel</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#00758F]/50 border-[#00758F] '>
                  <img src={MysqlLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>MySQL</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#336791]/50 border-[#336791] '>
                  <img src={PostgreLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>PostgreSQL</p>
                </div>
              </div>
            </div>
          )}

          {activeTab.id === 'tools' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#24ACF2]/50 border-[#24ACF2] '>
                  <img src={VSLogo} alt='VSCode Logo' />
                  <p className='text-p2-semibold'>VSCode</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#DE4C36]/50 border-[#DE4C36] '>
                  <img src={GitLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Git</p>
                </div>
                <div className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#FFFFFF]/50 border-[#FFFFFF] '>
                  <img src={GithubLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>GitHub</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#FFFFFF]/50 border-[#FFFFFF] '>
                  <img src={TerminalLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Terminal</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#1FD592]/50 border-[#1FD592] '>
                  <img src={PyCharmLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>PyCharm</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#3ECF8E]/50 border-[#3ECF8E] '>
                  <img src={SupabaseLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Supabase</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#41D1FF]/50 border-[#41D1FF] '>
                  <img src={ViteLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Vite</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#FF9900]/50 border-[#FF9900] '>
                  <img src={AwsLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>AWS</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#008FE2]/50 border-[#008FE2] '>
                  <img src={DockerLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>Docker</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#CB3837]/50 border-[#CB3837] '>
                  <img src={NpmLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>npm</p>
                </div>
              </div>
            </div>
          )}

          {activeTab.id === 'learning' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#FED444]/50 border-[#FED444] '>
                  <img src={PythonLogo} alt='VSCode Logo' />
                  <p className='text-p2-semibold'>Python</p>
                </div>
                <div className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#3178C6]/50 border-[#3178C6] '>
                  <img src={TSLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>TypeScript</p>
                </div>
                <div className='h-[60px] w-full flex items-center gap-2 border-2 rounded-5 p-3 bg-gradient-to-br from-darkmode-500 to-[#0AE448]/50 border-[#0AE448] '>
                  <img src={GsapLogo} alt='Html Logo' />
                  <p className='text-p2-semibold'>GSAP</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
