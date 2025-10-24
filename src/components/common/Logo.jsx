export const Logo = ({ src, size = 'md', className = '', alt }) => {
  const sizes = {
    xs: 'w-5  h-5',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <img
      src={src}
      className={`${className} ${sizes[size]}`}
      alt={alt || 'Logo'}
    />
  );
};
