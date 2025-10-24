export function Title({ text, children }) {
  return (
    <div className='flex gap-2'>
      {children}
      <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
        {text}
      </h1>
    </div>
  );
}
