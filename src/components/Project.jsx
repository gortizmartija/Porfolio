import PreviewLogo from '@/assets/icons/globe.svg';
import ReactSMLogo from '@/assets/logos/small/react_dark.svg';
import GithubLogo from '@/assets/logos/small/github.svg';
import { Button } from '@/components';

export function Project({
  img,
  name,
  subName,
  children,
  preview = true,
  hrefPreview,
  hrefCodigo,
}) {
  return (
    <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
      <img
        src={img}
        alt='Imagen del Proyecto'
        className='rounded-[25px] md:max-w-1/2'
      />
      <div className='flex flex-col gap-3'>
        <h3 className='text-h3s-semibold'>
          <span className='text-secondary-200 italic'>{name}</span> -{subName}
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
        <p className='text-p2-normal text-neutral-100 '>{children}</p>
        <div className='mt-1 flex gap-2'>
          {preview && (
            <Button href={hrefPreview} arialabel='Preview' variant='defaultMD'>
              <img src={PreviewLogo} alt='Preview Logo' />
              Preview
            </Button>
          )}
          <Button href={hrefCodigo} arialabel='Preview' variant='outlineMD'>
            <img src={GithubLogo} alt='GitHub Logo' />
            Código
          </Button>
        </div>
      </div>
    </div>
  );
}
