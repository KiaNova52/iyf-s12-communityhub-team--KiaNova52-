export function Button({
  text,
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className = '',
  ...buttonProps
}) {
  const content = children ?? text ?? 'Click me'
  const classes = [
    'button',
    `button-${variant}`,
    `button-${size}`,
    loading ? 'button-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...buttonProps}
      className={classes}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {loading ? 'Loading…' : content}
    </button>
  )
}
