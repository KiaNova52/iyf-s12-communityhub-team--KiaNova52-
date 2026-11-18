export function Input({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  className = '',
  ...inputProps
}) {
  const inputId = id ?? name

  return (
    <label className={`field ${className}`.trim()} htmlFor={inputId}>
      {label && <span className="field-label">{label}</span>}
      <input
        {...inputProps}
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}
