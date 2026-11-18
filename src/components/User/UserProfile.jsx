import { UserCard } from './UserCard.jsx'

const communityProfile = {
  name: 'CommunityHub',
  role: 'A welcoming place to learn together.',
}

export function UserProfile() {
  return (
    <section className="profile-card">
      <div className="profile-banner" />
      <div className="profile-content">
        <UserCard user={communityProfile} />
        <p>Curious people sharing practical lessons, one story at a time.</p>
        <a href="#practice">Get to know us <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
