import { Button } from '../shared/Button.jsx'

function formatPostDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export function PostCard({ post, onLike, onDelete }) {
  const initials = post.author
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="post-card">
      <div className="post-card-topline">
        <span className="post-category">{post.category}</span>
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      </div>
      <h3>{post.title}</h3>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-card-footer">
        <div className="post-author">
          <span className="author-avatar" aria-hidden="true">{initials}</span>
          <span>By <strong>{post.author}</strong></span>
        </div>
        <div className="post-actions">
          <Button
            variant={post.liked ? 'liked' : 'quiet'}
            size="small"
            onClick={onLike}
            aria-label={`${post.liked ? 'Unlike' : 'Like'} ${post.title}`}
            aria-pressed={post.liked}
          >
            <span aria-hidden="true">{post.liked ? '♥' : '♡'}</span>
            {post.likes}
          </Button>
          {post.author === 'You' && (
            <Button
              variant="quiet"
              size="small"
              onClick={onDelete}
              aria-label={`Delete ${post.title}`}
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
