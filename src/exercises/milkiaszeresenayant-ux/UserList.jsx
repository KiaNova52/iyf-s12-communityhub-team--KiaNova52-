import { UserCard } from '../../components/User/UserCard.jsx'

export function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p className="user-list-empty">No members to show yet.</p>
  }

  return (
    <ul className="challenge-user-list">
      {users.map((user) => (
        <li key={user.id}><UserCard user={user} /></li>
      ))}
    </ul>
  )
}
