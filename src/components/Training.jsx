import DotLogo from '../assets/icons/dot.svg';
import TrainingLogo from '../assets/icons/book.svg';

export function Training() {
  return (
    <article className='flex flex-col gap-6'>
      <div className='flex gap-2 items-end '>
        <img src={TrainingLogo} alt='Training Logo' />
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          Formación
        </h1>
      </div>
      <div className='flex flex-col gap-2'>
        <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-3 before:rounded-full before:border-neutral-900 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
          <div className='relative pb-6 md:col-span-2'>
            <div className='sticky top-0'>
              <span className='text-secondary-200 flex justify-center -left-[45px] absolute rounded-full bg-darkmode-500 h-10'>
                <img src={DotLogo} alt='Dot Logo' className='size-6 pt-2' />
              </span>
              <h3 className='text-h5s-semibold italic'>
                Cursando desarrollo de aplicaciones Python
              </h3>
              <p className='text-p1-semibold pt-2 text-secondary-200 '>
                CIFP Elorrieta Erreka Mari LHII
              </p>
              <time className='p-0 m-0 text-sm text-neutral-500'>
                Actualmente
              </time>
            </div>
          </div>
          <div className='text-p2-normal relative flex flex-col gap-2 pb-4 text-neutral-500 md:col-span-3'>
            Divulgo sobre programación y desarrollo web en diferentes
            plataformas. Galardonado como mejor creador de contenido de habla
            no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
          </div>
        </div>
        <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-3 before:rounded-full before:border-neutral-900 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
          <div className='relative pb-6 md:col-span-2'>
            <div className='sticky top-0'>
              <span className='text-secondary-200 flex justify-center -left-[45px] absolute rounded-full bg-darkmode-500 h-10'>
                <img src={DotLogo} alt='Dot Logo' className='size-6 pt-2' />
              </span>
              <h3 className='text-h5s-semibold italic'>
                Formado en desarrollo de aplicaciones Web
              </h3>
              <p className='text-p1-semibold pt-2 text-secondary-200 '>
                CIFP Txurdinaga LHII
              </p>
              <time className='p-0 m-0 text-sm text-neutral-500'>
                2023 - 2025
              </time>
            </div>
          </div>
          <div className='text-p2-normal relative flex flex-col gap-2 pb-4 text-neutral-500 md:col-span-3'>
            Responsable de la plataforma, componentes y utilidades para la
            creación y desarrollo de aplicaciones web. Mejora de un 30% en la
            entrega de software. Implantación de medidas de integración continua
            y despliegue con A/B testing en más de 15 equipos.
          </div>
        </div>
        <div className='relative mx-12 grid md:grid-cols-5 md:gap-10 md:space-x-4]'>
          <div className='relative pb-6 md:pb-0 md:col-span-2'>
            <div className='sticky top-0'>
              <span className='text-secondary-200 flex justify-center -left-[45px] absolute rounded-full bg-darkmode-500 h-10'>
                <img src={DotLogo} alt='Dot Logo' className='size-6 pt-2' />
              </span>
              <h3 className='text-h5s-semibold italic'>
                Formado en Sistemas Microinformáticos y Redes
              </h3>
              <p className='text-p1-semibold pt-2 text-secondary-200 '>
                CIFP Elorrieta Erreka Mari LHII
              </p>
              <time className='p-0 m-0 text-sm text-neutral-500'>
                2021 - 2023
              </time>
            </div>
          </div>
          <div className='text-p2-normal relative flex flex-col gap-2 text-neutral-500 md:col-span-3'>
            Divulgo sobre programación y desarrollo web en diferentes
            plataformas. Galardonado como mejor creador de contenido de habla
            no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
          </div>
        </div>
      </div>
    </article>
  );
}
