export function Card({
  title,
  children,
  variant = 'primary',
  className = '',
}) {
  return (
    <section className={`card card-${variant} ${className}`.trim()}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </section>
  )
}
