import AboutLogo from '../assets/icons/user.svg';

export function About() {
  return (
    <article className='flex flex-col gap-6'>
      <div className='flex gap-2 items-end '>
        <img src={AboutLogo} alt='About Logo' />
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          Sobre Mí
        </h1>
      </div>
      <p className='text-p2-normal text-balance'>
        Hola, me llamo Gael. Soy un apasionado del mundo del la tecnologia que{' '}
        <span className='text-primary-200'>
          siempre busca superarse en cada nuevo proyecto
        </span>{' '}
        en el que embarca.
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
