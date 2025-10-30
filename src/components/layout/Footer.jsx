export function Footer() {
  return (
    <footer className='mt-30 mb-5 mx-5 flex justify-between xl:mx-[253px] 2xl:mx-[508px]'>
      <p className='text-footer-normal'>© 2025 - Gael Ortiz Martija</p>
      <a
        href='mailto:gortizmartija@gmail.com'
        className='text-footer-semibold inline-block relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-primary-50 after:transform after:scale-x-0 after:transition-transform hover:text-primary-50 hover:after:scale-x-100'
      >
        Contacto
      </a>
    </footer>
  );
}
