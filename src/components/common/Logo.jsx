export const Logo = ({ src, size = 'md', className = '', alt }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <img
      src={src}
      className={`${sizes[size]} ${className}`}
      alt={alt || 'Logo'}
    />
  );
};
