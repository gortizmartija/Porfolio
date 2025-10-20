import EmailLogo from '../assets/icons/email.svg';
import LinkedinLogo from '../assets/logos/small/linkedin.svg';
import GithubLogo from '../assets/logos/small/github.svg';

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
          <a
            href=''
            className=' rounded-full border-primary-100 text-p1-semibold text-primary-100 border-2 py-2 px-3'
          >
            Descargar CV
          </a>
          <a
            href=''
            className='inline-flex items-center justify-center w-9 h-9 rounded-full border-primary-100 text-p1-semibold text-primary-100 border-2'
            aria-label='Correo'
          >
            <img src={EmailLogo} alt='Email Logo' />
          </a>
          <a
            href=''
            className='inline-flex items-center justify-center w-9 h-9 rounded-full border-primary-100 text-p1-semibold text-primary-100 border-2'
            aria-label='Linkedin'
          >
            <img src={LinkedinLogo} alt='Linkedin Logo' />
          </a>
          <a
            href=''
            className='inline-flex items-center justify-center w-9 h-9 rounded-full border-primary-100 text-p1-semibold text-primary-100 border-2'
            aria-label='GitHub'
          >
            <img src={GithubLogo} alt='GitHub Logo' />
          </a>
        </nav>
      </div>
    </header>
  );
}
