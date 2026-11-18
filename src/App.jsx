import { useState } from 'react'
import { CreatePost } from './components/Post/CreatePost.jsx'
import { PostList } from './components/Post/PostList.jsx'
import { Header } from './components/Layout/Header.jsx'
import { Footer } from './components/Layout/Footer.jsx'
import { Sidebar } from './components/Layout/Sidebar.jsx'
import { Button } from './components/shared/Button.jsx'
import { Input } from './components/shared/Input.jsx'
import { PracticeLab } from './exercises/milkiaszeresenayant-ux/PracticeLab.jsx'
import { searchPosts, sortNewestFirst } from './utils/posts.js'
import './App.css'

const initialPosts = [
  {
    id: 1,
    title: 'What I learned building my first React component',
    excerpt:
      'Breaking a page into small, reusable pieces made the whole interface easier to understand.',
    content:
      'I started with a header, a post card, and a footer. Composing those pieces into a page made it much easier to make changes without rewriting everything.',
    author: 'Amina Otieno',
    date: '2026-11-17T10:30:00.000Z',
    likes: 12,
    liked: false,
    category: 'Learning',
  },
  {
    id: 2,
    title: 'A small habit that made debugging easier',
    excerpt:
      'When something breaks, I now check one assumption at a time instead of changing everything at once.',
    content:
      'Reading the console, isolating the smallest failing case, and making one change at a time helps me understand the actual cause of a bug.',
    author: 'Brian Kamau',
    date: '2026-11-15T14:00:00.000Z',
    likes: 8,
    liked: false,
    category: 'Tips',
  },
  {
    id: 3,
    title: 'Welcome to the CommunityHub',
    excerpt:
      'A place to share what you are learning, ask questions, and celebrate progress together.',
    content:
      'CommunityHub is a space for our learning community. Share your progress and help someone else take their next step.',
    author: 'CommunityHub Team',
    date: '2026-11-12T08:15:00.000Z',
    likes: 19,
    liked: false,
    category: 'Community',
  },
]

function App() {
  const [posts, setPosts] = useState(initialPosts)
  const [searchQuery, setSearchQuery] = useState('')
  const visiblePosts = searchPosts(sortNewestFirst(posts), searchQuery)
  const totalLikes = posts.reduce((total, post) => total + post.likes, 0)

  function handleCreatePost(newPost) {
    setPosts((currentPosts) => [
      {
        ...newPost,
        id: Date.now(),
        author: 'You',
        date: new Date().toISOString(),
        likes: 0,
        liked: false,
        category: 'Community',
      },
      ...currentPosts,
    ])
  }

  function handleLikePost(postId) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.likes + (post.liked ? -1 : 1),
            }
          : post,
      ),
    )
  }

  function handleDeletePost(postId) {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId),
    )
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">A community for curious minds</p>
            <h1>Good ideas grow <span>together.</span></h1>
            <p className="hero-description">
              Share what you are learning, meet fellow builders, and make your
              next small step a little less solo.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#create-post">
                Share your story <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#community">
                Explore the community
              </a>
            </div>
            <div className="hero-proof" aria-label="Community activity">
              <span className="avatar-stack" aria-hidden="true">
                <span>AM</span>
                <span>BK</span>
                <span>JT</span>
              </span>
              <p><strong>{posts.length} stories</strong> shared by our community</p>
            </div>
          </div>
          <div className="hero-art" aria-label="Community conversations">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-note art-note-top">
              <span className="note-icon note-icon-sun">✳</span>
              <span>Ideas in progress</span>
            </div>
            <div className="art-center">
              <span className="art-mark">c.</span>
              <span>make room<br />for growth</span>
            </div>
            <div className="art-note art-note-bottom">
              <span className="note-icon note-icon-heart">♥</span>
              <span>Better, together</span>
            </div>
          </div>
        </section>

        <section className="community-section section-wrap" id="community">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The community board</p>
              <h2>Fresh from the feed</h2>
            </div>
            <p className="section-summary">
              Small wins, useful lessons, and ideas worth passing on.
            </p>
          </div>

          <div className="community-grid">
            <div className="feed-column">
              <CreatePost onCreatePost={handleCreatePost} />
              <div className="feed-toolbar">
                <div>
                  <h3>Community stories</h3>
                  <p>{posts.length} posts · {totalLikes} appreciations</p>
                </div>
                <Input
                  label="Search posts"
                  name="search"
                  placeholder="Search by title or author"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="search-input"
                />
              </div>
              <PostList
                posts={visiblePosts}
                onLike={handleLikePost}
                onDelete={handleDeletePost}
              />
            </div>
            <Sidebar posts={posts} />
          </div>
        </section>

        <section className="practice-section section-wrap" id="practice">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Week 8 · React fundamentals</p>
              <h2>Practice playground</h2>
            </div>
            <p className="section-summary">
              The lesson exercises and daily challenges are collected here.
              Try each control and explore the components.
            </p>
          </div>
          <PracticeLab />
          <div className="practice-cta">
            <p>Every great app starts with a small experiment.</p>
            <Button
              variant="secondary"
              onClick={() => document.getElementById('home')?.scrollIntoView()}
            >
              Back to the top
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
