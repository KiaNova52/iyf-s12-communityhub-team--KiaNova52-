import { UserProfile } from '../User/UserProfile.jsx'

const categories = ['Learning', 'Design', 'Career', 'Community']

export function Sidebar({ posts }) {
  const popularPosts = [...posts]
    .sort((first, second) => second.likes - first.likes)
    .slice(0, 3)

  return (
    <aside className="sidebar" aria-label="Community information">
      <UserProfile />
      <section className="sidebar-block">
        <div className="sidebar-heading">
          <h3>Popular this week</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <ol className="popular-list">
          {popularPosts.map((post, index) => (
            <li key={post.id}>
              <span className="popular-rank">0{index + 1}</span>
              <div>
                <a href="#community">{post.title}</a>
                <span>{post.likes} appreciations</span>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="sidebar-block">
        <div className="sidebar-heading">
          <h3>Explore topics</h3>
          <span aria-hidden="true">＋</span>
        </div>
        <div className="tag-list">
          {categories.map((category) => (
            <a key={category} href="#community">{category}</a>
          ))}
        </div>
      </section>
      <p className="sidebar-note">
        <span aria-hidden="true">✦</span> You belong in the conversation.
      </p>
    </aside>
  )
}
