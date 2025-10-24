export function TechBox({ text, hex, children }) {
  const styles = {
    borderColor: hex,
    backgroundImage: `linear-gradient(to bottom right, rgb(23 23 23), ${hex}80)`,
  };

  return (
    <div
      style={styles}
      className='h-[60px] min-w-fit w-full flex items-center gap-2 border-2 rounded-5 p-3'
    >
      {children}
      <p className='text-p2-semibold'>{text}</p>
    </div>
  );
}
