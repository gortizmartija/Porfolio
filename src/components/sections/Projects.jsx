import ProjectsLogo from '@/assets/icons/code.svg';
import projectImage from '@/assets/svgl.webp';
import { Project } from '@/components/ui';
import { Title } from '@/components/common';

const PROJECTS = [
  {
    img: projectImage,
    name: 'Porfolio Web',
    subName: 'Bonito escaparate de mis habilidades',
    description:
      'Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.',
    preview: true,
    technologies: [
      { logo: 'react', name: 'React', color: '#58C4DC' },
      { logo: 'gsap', name: 'GSAP', color: '#0AE448' },
      { logo: 'typescript', name: 'TypeScript', color: '#3178C6' },
    ],
  },
  {
    img: projectImage,
    name: 'Porfolio Web',
    subName: 'Bonito escaparate de mis habilidades',
    description:
      'Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.',
    preview: false,
    technologies: [
      { logo: 'vue', name: 'Vue', color: '#41B883' },
      { logo: 'gsap', name: 'GSAP', color: '#0AE448' },
    ],
  },
];

export function Projects() {
  return (
    <article className='flex flex-col gap-6'>
      <Title text='Proyectos'>
        <img src={ProjectsLogo} alt='Projects Logo' />
      </Title>

      <div className='flex flex-col gap-10 md:gap-12'>
        {PROJECTS.map((project, index) => (
          <Project
            key={`${project.name}-${index}`}
            img={project.img}
            name={project.name}
            subName={project.subName}
            preview={project.preview}
            technologies={project.technologies}
          >
            {project.description}
          </Project>
        ))}
      </div>
    </article>
  );
}
