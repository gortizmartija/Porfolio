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
          Creando aplicaciones prácticas con Python, explorando automatización,
          gestión de datos y programación orientada a objetos. En constante
          aprendizaje de nuevas librerías y buenas prácticas.
        </Event>
        <Event
          title='Formado en desarrollo de aplicaciones Web'
          subtitle='CIFP Txurdinaga LHII'
          time='2023 - 2025'
        >
          Diseñando y construyendo sitios modernos con HTML, CSS, JavaScript y
          frameworks como React o Vue entre otros. Aprendiendo a unir diseño y
          funcionalidad para ofrecer experiencias fluidas y atractivas.
        </Event>
        <Event
          variant='last'
          title='Formado en Sistemas Microinformáticos y Redes'
          subtitle='CIFP Elorrieta Erreka Mari LHII'
          time='2021 - 2023'
        >
          Configurando equipos, gestionando redes y solucionando problemas
          técnicos. Aprendiendo desde la base cómo funciona la infraestructura
          que sostiene el mundo digital.
        </Event>
      </div>
    </article>
  );
}
