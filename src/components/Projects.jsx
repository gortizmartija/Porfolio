import ProjectsLogo from '../assets/icons/code.svg';
import PreviewLogo from '../assets/icons/globe.svg';
import ReactSMLogo from '../assets/logos/small/react_dark.svg';
import GithubLogo from '../assets/logos/small/github.svg';

export function Projects() {
  return (
    <article className='flex flex-col gap-6'>
      <div className='flex gap-2 items-end '>
        <img src={ProjectsLogo} alt='Projects Logo' />
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          Proyectos
        </h1>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-3'>
          <img
            src='https://porfolio.dev/projects/svgl.webp'
            alt='Imagen del Proyecto'
            className='rounded-[25px]'
          />
          <div className='flex flex-col gap-3'>
            <h3 className='text-h3s-semibold'>
              <span className='text-secondary-200 italic'>Porfolio Web</span> -
              Bonito escaparate de mis habilidades
            </h3>
            <span className='flex gap-2'>
              <div className='flex items-center gap-2 px-[10px] py-1.5 rounded-2 border-1 border-[#58C4DC] w-fit'>
                <img src={ReactSMLogo} alt='React Logo' />
                <p className='text-p1-semibold text-neutral-100'>React</p>
              </div>
              <div className='flex items-center gap-2 px-[10px] py-1.5 rounded-2 border-1 border-[#58C4DC] w-fit'>
                <img src={ReactSMLogo} alt='React Logo' />
                <p className='text-p1-semibold text-neutral-100'>React</p>
              </div>
            </span>
            <p className='text-p2-normal text-neutral-100 '>
              Biblioteca de logos SVG de las marcas más populares. +10k visitas
              al mes. +2K svgs descargados. Creado desde cero con Next.js, React
              y Tailwind CSS.
            </p>
            <div className='mt-1 flex gap-2'>
              <a
                href=''
                className='flex items-center gap-2 rounded-full bg-primary-500 text-p2-semibold text-neutra-50 py-2.5 px-4'
              >
                <img src={PreviewLogo} alt='React Logo' />
                Preview
              </a>
              <a
                href=''
                className='flex items-center gap-2 rounded-full border-primary-100 text-p2-semibold text-primary-100 border-2 py-2.5 px-4'
              >
                <img src={GithubLogo} alt='GitHub Logo' />
                Código
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <img
            src='https://porfolio.dev/projects/svgl.webp'
            alt='Imagen del Proyecto'
            className='rounded-[25px]'
          />
          <div className='flex flex-col gap-3'>
            <h3 className='text-h3s-semibold'>
              <span className='text-secondary-200 italic'>Porfolio Web</span> -
              Bonito escaparate de mis habilidades
            </h3>
            <span className='flex gap-2'>
              <div className='flex items-center gap-2 px-[10px] py-1.5 rounded-2 border-1 border-[#58C4DC] w-fit'>
                <img src={ReactSMLogo} alt='React Logo' />
                <p className='text-p1-semibold text-neutral-100'>React</p>
              </div>
              <div className='flex items-center gap-2 px-[10px] py-1.5 rounded-2 border-1 border-[#58C4DC] w-fit'>
                <img src={ReactSMLogo} alt='React Logo' />
                <p className='text-p1-semibold text-neutral-100'>React</p>
              </div>
            </span>
            <p className='text-p2-normal text-neutral-100 '>
              Biblioteca de logos SVG de las marcas más populares. +10k visitas
              al mes. +2K svgs descargados. Creado desde cero con Next.js, React
              y Tailwind CSS.
            </p>
            <div className='mt-1 flex gap-2'>
              <a
                href=''
                className='flex items-center gap-2 rounded-full bg-primary-500 text-p2-semibold text-neutra-50 py-2.5 px-4'
              >
                <img src={PreviewLogo} alt='React Logo' />
                Preview
              </a>
              <a
                href=''
                className='flex items-center gap-2 rounded-full border-primary-100 text-p2-semibold text-primary-100 border-2 py-2.5 px-4'
              >
                <img src={GithubLogo} alt='GitHub Logo' />
                Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
