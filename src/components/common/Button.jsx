import clsx from 'clsx';

/**
 * Button component usable as <a> or <button>
 * Props:
 * - as: 'a' | 'button' (defaults to 'a')
 * - href: when using as='a'
 * - onClick: when using as='button'
 * - variant: 'default' | 'outline' | 'icon'
 * - className: additional classes
 * - ariaLabel: accessible label (for icon-only buttons)
 */
export function Button({
  as = 'a',
  href = '',
  onClick,
  variant = 'defaultSM',
  className,
  ariaLabel,
  children,
  type = 'button',
  ...rest
}) {
  const base = 'rounded-full';
  const variants = {
    defaultSM:
      'py-2 px-3 bg-primary-500 hover:bg-primary-700 focus:bg-primary-900 text-p1-semibold',
    outlineSM:
      'py-2 px-3 border-2 border-primary-100 text-primary-100 hover:border-primary-300 hover:text-primary-300 focus:border-primary-700 focus:text-primary-700 text-p1-semibold',
    outlineIconSM:
      'inline-flex items-center justify-center w-9 h-9 border-primary-100 hover:border-primary-300 hover:text-primary-300 focus:border-primary-700 focus:text-primary-700 text-primary-100 border-2 text-p1-semibold',
    defaultMD:
      'flex items-center gap-2 bg-primary-500 hover:bg-primary-700 focus:bg-primary-900 text-p2-semibold py-2.5 px-4',
    outlineMD:
      'flex items-center gap-2 border-primary-100 text-p2-semibold text-primary-100 hover:border-primary-300 hover:text-primary-300 focus:border-primary-700 focus:text-primary-700 border-2 py-2.5 px-4',
    outlineIconMD:
      'inline-flex items-center justify-center w-9 h-9 border-primary-100 text-primary-100 hover:border-primary-300 hover:text-primary-300 focus:border-primary-700 focus:text-primary-700 border-2 text-p2-semibold ',
  };

  const classes = clsx(base, variants[variant], className);

  if (as === 'button') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target='_blanck'
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </a>
  );
}
