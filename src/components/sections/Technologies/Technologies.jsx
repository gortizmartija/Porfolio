import TechnologiesLogo from '@/assets/icons/thunder.svg';
import { TechnologyTabs } from './TechnologyTabs';
import { Title } from '@/components/common';

export function Technologies() {
  return (
    <article className='flex flex-col gap-6'>
      <Title text='Tecnologias'>
        <img src={TechnologiesLogo} alt='About Logo' />
      </Title>

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
