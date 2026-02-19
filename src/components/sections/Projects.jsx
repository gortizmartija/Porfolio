import ProjectsLogo from '@/assets/icons/code.svg';
import porfolioImage from '@/assets/images/porfolio.webp';
import weatherAppImage from '@/assets/images/weather-app.webp';
import YokaiApiImage from '@/assets/images/yokai-api.webp';
import { Project } from '@/components/ui';
import { Title } from '@/components/common';

const PROJECTS = [
  {
    img: porfolioImage,
    name: 'Porfolio Web',
    subName: 'Bonito escaparate de mis habilidades',
    description:
      'Porfolio Web personal con diseño moderno y minimalista. Muestra mis proyectos, habilidades y experiencia en desarrollo web. Creado desde cero con React, GSAP y Tailwind CSS.',
    preview: true,
    hrefPreview: 'https://gortizmartija.github.io/Porfolio/',
    hrefCodigo: 'https://github.com/gortizmartija/Porfolio',
    technologies: [
      { logo: 'react', name: 'React', color: '#58C4DC' },
      { logo: 'gsap', name: 'GSAP', color: '#0AE448' },
      { logo: 'tailwind', name: 'Tailwind CSS', color: '#06b6d4' },
    ],
  },
  {
    img: YokaiApiImage,
    name: 'Yokai API',
    subName: 'Datos de los espíritus y monstruos del folclore japonés.',
    description:
      'API RESTful que ofrece información detallada sobre Yokais, fantasmas del folclore japonés. Permite a los desarrolladores acceder a datos estructurados con esta interesante temática.',
    preview: true,
    hrefPreview: 'https://yokai-web.vercel.app/',
    hrefCodigo: 'https://github.com/gortizmartija/yokai-api',
    technologies: [
      { logo: 'vue', name: 'Vue.js', color: '#42b883' },
      { logo: 'typescript', name: 'TypeScript', color: '#3178c6' },
    ],
  },
  {
    img: weatherAppImage,
    name: 'Weather App',
    subName: 'Información climática clara y en tiempo real.',
    description:
      'Aplicación web moderna y minimalista para consultar el clima en tiempo real. Utilizando una API pública para ofrecer datos precisos y con una interfaz de usuario limpia y adaptable.',
    preview: true,
    hrefPreview: 'https://weather-app-xi-six-84.vercel.app/',
    hrefCodigo: 'https://github.com/gortizmartija/weather-app',
    technologies: [
      { logo: 'react', name: 'React', color: '#58C4DC' },
      { logo: 'tailwind', name: 'Tailwind CSS', color: '#06b6d4' },
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
            hrefPreview={project.hrefPreview}
            hrefCodigo={project.hrefCodigo}
          >
            {project.description}
          </Project>
        ))}
      </div>
    </article>
  );
}
