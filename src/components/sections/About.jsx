import AboutLogo from '@/assets/icons/user.svg';
import { Title } from '@/components/common';

export function About() {
  return (
    <article className='flex flex-col gap-6'>
      <Title text='Sobre Mí'>
        <img src={AboutLogo} alt='About Logo' />
      </Title>

      <p className='text-p2-normal'>
        Hola, me llamo Gael. Soy un apasionado del mundo de la tecnologia que{' '}
        <span className='text-primary-200'>
          siempre busca superarse en cada nuevo proyecto
        </span>{' '}
        en el que se embarca.
        <br />
        <br />
        <span className='text-p1-semibold'>+1</span> años de experiencia.{' '}
        <span className='text-secondary-200'>
          Tecnico Superior en el Desarrollo de Software
        </span>{' '}
        de Barakaldo, Bizkaia. Especializado en el desarrollo de aplicaciones
        Web.
      </p>
    </article>
  );
}
