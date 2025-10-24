import TrainingLogo from '@/assets/icons/book.svg';
import { Event } from '@/components/ui';
import { Title } from '@/components/common';

export function Training() {
  return (
    <article className='flex flex-col gap-6'>
      <Title text='Formación'>
        <img src={TrainingLogo} alt='Training Logo' />
      </Title>

      <div className='flex flex-col gap-2'>
        <Event
          title='Cursando desarrollo de aplicaciones Python'
          subtitle='CIFP Elorrieta Erreka Mari LHII'
          time='Actualmente'
        >
          Divulgo sobre programación y desarrollo web en diferentes plataformas.
          Galardonado como mejor creador de contenido de habla no-inglesa en
          2022 y mejor comunidad en 2023 por GitHub.
        </Event>
        <Event
          title='Formado en desarrollo de aplicaciones Web'
          subtitle='CIFP Txurdinaga LHII'
          time='2023 - 2025'
        >
          Responsable de la plataforma, componentes y utilidades para la
          creación y desarrollo de aplicaciones web. Mejora de un 30% en la
          entrega de software. Implantación de medidas de integración continua y
          despliegue con A/B testing en más de 15 equipos.
        </Event>
        <Event
          variant='last'
          title='Formado en Sistemas Microinformáticos y Redes'
          subtitle='CIFP Elorrieta Erreka Mari LHII'
          time='2021 - 2023'
        >
          Divulgo sobre programación y desarrollo web en diferentes plataformas.
          Galardonado como mejor creador de contenido de habla no-inglesa en
          2022 y mejor comunidad en 2023 por GitHub.
        </Event>
      </div>
    </article>
  );
}
