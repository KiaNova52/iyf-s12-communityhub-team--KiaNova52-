import { PostCard } from './PostCard.jsx'

export function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <span aria-hidden="true">✧</span>
        <h3>No stories found yet</h3>
        <p>Try another search, or be the first to share something.</p>
      </div>
    )
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  )
}
