import { useState } from 'react'
import { Button } from '../../components/shared/Button.jsx'

const startingPosts = [
  { id: 1, title: 'First Post', likes: 0 },
  { id: 2, title: 'Second Post', likes: 0 },
]

function PostLikeButton({ post, onLike }) {
  return (
    <li className="lifted-post">
      <span>{post.title}</span>
      <Button size="small" variant="quiet" onClick={() => onLike(post.id)}>
        ♡ {post.likes}
      </Button>
    </li>
  )
}

export function LiftedStateExample() {
  const [posts, setPosts] = useState(startingPosts)
  const totalLikes = posts.reduce((total, post) => total + post.likes, 0)

  function handleLike(postId) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    )
  }

  return (
    <div className="lifted-demo">
      <p className="lifted-stats">{posts.length} posts <span>·</span> {totalLikes} total likes</p>
      <ul>
        {posts.map((post) => (
          <PostLikeButton key={post.id} post={post} onLike={handleLike} />
        ))}
      </ul>
    </div>
  )
}
