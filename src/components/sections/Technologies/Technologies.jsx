import TechnologiesLogo from '@/assets/icons/thunder.svg';
import { TechnologyTabs } from './TechnologyTabs';

export function Technologies() {
  return (
    <article className='flex flex-col gap-6'>
      <div className='flex gap-2 items-end '>
        <img src={TechnologiesLogo} alt='About Logo' />
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          Tecnologias
        </h1>
      </div>
      <p className='text-p2-normal'>
        Algunas de las{' '}
        <span className='text-secondary-200'>tecnologias mas destacables</span>{' '}
        con las que me he familiarizado durante mi trayectoria por el mundo del
        desarrollo de software.
      </p>

      <TechnologyTabs />
    </article>
  );
}
