import ProjectsLogo from '@/assets/icons/code.svg';
import { Project } from '@/components/ui';
import { Title } from '@/components/common';

export function Projects() {
  return (
    <article className='flex flex-col gap-6'>
      <Title text='Proyectos'>
        <img src={ProjectsLogo} alt='Projects Logo' />
      </Title>

      <div className='flex flex-col gap-10 md:gap-12'>
        <Project
          img='https://porfolio.dev/projects/svgl.webp'
          name='Porfolio Web'
          subName='Bonito escaparate de mis habilidades'
          technologies={[
            { logo: 'react', name: 'React', color: '#58C4DC' },
            { logo: 'gsap', name: 'GSAP', color: '#0AE448' },
            { logo: 'typescript', name: 'TypeScript', color: '#3178C6' },
          ]}
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
          technologies={[
            { logo: 'vue', name: 'Vue', color: '#41B883' },
            { logo: 'gsap', name: 'GSAP', color: '#0AE448' },
          ]}
        >
          Biblioteca de logos SVG de las marcas más populares. +10k visitas al
          mes. +2K svgs descargados. Creado desde cero con Next.js, React y
          Tailwind CSS.
        </Project>
      </div>
    </article>
  );
}
