import ProjectsLogo from '@/assets/icons/code.svg';
import { Project } from '@/components';

export function Projects() {
  return (
    <article className='flex flex-col gap-6'>
      <div className='flex gap-2 items-end '>
        <img src={ProjectsLogo} alt='Projects Logo' />
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          Proyectos
        </h1>
      </div>
      <div className='flex flex-col gap-10 md:gap-12'>
        <Project
          img='https://porfolio.dev/projects/svgl.webp'
          name='Porfolio Web'
          subName='Bonito escaparate de mis habilidades'
        >
          Biblioteca de logos SVG de las marcas más populares. +10k visitas al
          mes. +2K svgs descargados. Creado desde cero con Next.js, React y
          Tailwind CSS.
        </Project>
        <Project
          img='https://porfolio.dev/projects/svgl.webp'
          name='Porfolio Web'
          subName='Bonito escaparate de mis habilidades'
          preview={false}
        >
          Biblioteca de logos SVG de las marcas más populares. +10k visitas al
          mes. +2K svgs descargados. Creado desde cero con Next.js, React y
          Tailwind CSS.
        </Project>
      </div>
    </article>
  );
}
