import { Link } from 'react-router-dom'

/**
 * CTAButton — a polymorphic button that renders as a <Link> (internal),
 * <a> (external), or <button> depending on the props provided.
 *
 * Props:
 *   to        — internal React Router path (renders as <Link>)
 *   href      — external URL (renders as <a>)
 *   onClick   — click handler (renders as <button>)
 *   variant   — "primary" | "secondary" (default: "primary")
 *   children  — button label
 *   className — extra classes
 */
export default function CTAButton({
  to,
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  ...rest
}) {
  const base = variant === 'secondary' ? 'btn-secondary' : 'btn-primary'
  const classes = `${base} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
