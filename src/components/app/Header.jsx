import EmailLogo from '@/assets/icons/email.svg';
import LinkedinLogo from '@/assets/logos/small/linkedin.svg';
import GithubLogo from '@/assets/logos/small/github.svg';
import { Button } from '@/components';

export function Header() {
  return (
    <header className='flex flex-col gap-1 w-vw h-dvh justify-center items-center'>
      <div>
        <h1 className='text-d1s-semibold bg-gradient-to-r from-primary-300 to-secondary-500 bg-clip-text text-transparent w-fit'>
          Gael Ortiz
        </h1>
        <h4 className='text-h4s-semibold italic px-0.5 bg-gradient-to-t from-primary-100 to-neutral-50 bg-clip-text text-transparent'>
          Desarrollador de Software
        </h4>
        <nav className='flex items-center gap-2 mt-3'>
          <Button href='' arialabel='CV' variant='outlineSM'>
            Descargar CV
          </Button>
          <Button href='' arialabel='Correo' variant='outlineIconSM'>
            <img src={EmailLogo} alt='Email Logo' />
          </Button>
          <Button href='' arialabel='Linkedin' variant='outlineIconSM'>
            <img src={LinkedinLogo} alt='Linkedin Logo' />
          </Button>
          <Button href='' arialabel='GitHub' variant='outlineIconSM'>
            <img src={GithubLogo} alt='GitHub Logo' />
          </Button>
        </nav>
      </div>
    </header>
  );
}
