import { logos } from '@/assets/logos';

export function Label({ logo, title, hex }) {
  const styles = {
    borderColor: hex,
    borderWidth: '1px',
  };

  return (
    <div
      style={styles}
      className='flex items-center gap-2 px-[10px] py-1.5 rounded-md w-fit'
    >
      <img
        src={logos[logo]}
        alt={`${title} Logo`}
        className='w-4 h-4 object-contain'
      />
      <p className='text-p1-semibold text-neutral-100'>{title}</p>
    </div>
  );
}
