import { useState } from 'react';
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
import DjangoLogo from '@/assets/logos/django.svg';
import NodeLogo from '@/assets/logos/nodejs.svg';

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

      {/* Tab panel - content changes depending on active tab */}
      <div className='mt-4'>
        <div
          role='tabpanel'
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className='flex flex-col gap-4 h-72'
        >
          {activeTab.id === 'frontend' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='HTML' hex='#E34F26'>
                  <img src={HtmlLogo} alt='Html Logo' />
                </TechBox>
                <TechBox text='CSS' hex='#663399'>
                  <img src={CssLogo} alt='CSS Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='Vue' hex='#41B883'>
                  <img src={VueLogo} alt='Vue Logo' />
                </TechBox>
                <TechBox text='React' hex='#58C4DC'>
                  <img src={ReactLogo} alt='React Logo' />
                </TechBox>
                <TechBox text='JavaScript' hex='#F0DB4F'>
                  <img src={JSLogo} alt='JacaScript Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='Tailwind CSS' hex='#38BDF8'>
                  <img src={TailwindLogo} alt='TailwindCSS Logo' />
                </TechBox>
                <TechBox text='Figma' hex='#FF7262'>
                  <img src={FigmaLogo} alt='Figma Logo' />
                </TechBox>
              </div>
            </div>
          )}

          {activeTab.id === 'backend' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='Java' hex='#ED8B00'>
                  <img src={JavaLogo} alt='Java Logo' />
                </TechBox>
                <TechBox text='PHP' hex='#787CB5'>
                  <img src={PhpLogo} alt='PHP Logo' />
                </TechBox>
                <TechBox text='Laravel' hex='#FF2D20'>
                  <img src={LaravelLogo} alt='Laravel Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='MySQL' hex='#00758F'>
                  <img src={MysqlLogo} alt='MySQL Logo' />
                </TechBox>
                <TechBox text='PostgreSQL' hex='#336791'>
                  <img src={PostgreLogo} alt='PostgreSQL Logo' />
                </TechBox>
              </div>
            </div>
          )}

          {activeTab.id === 'tools' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='VSCode' hex='#24ACF2'>
                  <img src={VSLogo} alt='VSCode Logo' />
                </TechBox>
                <TechBox text='Git' hex='#DE4C36'>
                  <img src={GitLogo} alt='Git Logo' />
                </TechBox>
                <TechBox text='GitHub' hex='#FFFFFF'>
                  <img src={GithubLogo} alt='GitHub Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='Terminal' hex='#FFFFFF'>
                  <img src={TerminalLogo} alt='Terminal Logo' />
                </TechBox>
                <TechBox text='PyCharm' hex='#1FD592'>
                  <img src={PyCharmLogo} alt='PyCharm Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='Supabase' hex='#3ECF8E'>
                  <img src={SupabaseLogo} alt='Supabase Logo' />
                </TechBox>
                <TechBox text='Vite' hex='#41D1FF'>
                  <img src={ViteLogo} alt='Vite Logo' />
                </TechBox>
                <TechBox text='AWS' hex='#FF9900'>
                  <img src={AwsLogo} alt='AWS Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='Docker' hex='#008FE2'>
                  <img src={DockerLogo} alt='Docker Logo' />
                </TechBox>
                <TechBox text='npm' hex='#CB3837'>
                  <img src={NpmLogo} alt='npm Logo' />
                </TechBox>
              </div>
            </div>
          )}

          {activeTab.id === 'learning' && (
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <TechBox text='Python' hex='#FED444'>
                  <img src={PythonLogo} alt='Python Logo' />
                </TechBox>
                <TechBox text='Django' hex='#44b88b'>
                  <img src={DjangoLogo} alt='Django Logo' />
                </TechBox>
                <TechBox text='GSAP' hex='#0AE448'>
                  <img src={GsapLogo} alt='GSAP Logo' />
                </TechBox>
              </div>
              <div className='flex gap-2'>
                <TechBox text='Node.js' hex='#3C873A'>
                  <img src={NodeLogo} alt='NodeJS Logo' />
                </TechBox>
                <TechBox text='TypeScript' hex='#3178C6'>
                  <img src={TSLogo} alt='TypeScript Logo' />
                </TechBox>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
