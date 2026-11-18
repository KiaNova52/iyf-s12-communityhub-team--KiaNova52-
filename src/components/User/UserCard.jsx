export function UserCard({ user }) {
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="user-card">
      <span className="user-avatar" aria-hidden="true">{initials}</span>
      <div>
        <h4>{user.name}</h4>
        <p>{user.role}</p>
      </div>
    </article>
  )
}
