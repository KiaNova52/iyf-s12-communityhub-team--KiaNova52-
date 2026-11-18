import { describe, expect, it } from 'vitest'
import { searchPosts, sortNewestFirst } from './posts.js'

const posts = [
  { id: 1, title: 'Older story', excerpt: 'A lesson', author: 'Sam', date: '2026-01-01' },
  { id: 2, title: 'React notes', excerpt: 'Components are reusable', author: 'Alex', date: '2026-03-01' },
  { id: 3, title: 'New ideas', excerpt: 'Learning together', author: 'Sam', date: '2026-05-01' },
]

describe('sortNewestFirst', () => {
  it('orders posts newest first without changing the input array', () => {
    const result = sortNewestFirst(posts)

    expect(result.map((post) => post.id)).toEqual([3, 2, 1])
    expect(posts.map((post) => post.id)).toEqual([1, 2, 3])
  })
})

describe('searchPosts', () => {
  it('matches title and excerpt without regard to letter case', () => {
    expect(searchPosts(posts, 'REACT').map((post) => post.id)).toEqual([2])
    expect(searchPosts(posts, 'reusable').map((post) => post.id)).toEqual([2])
  })

  it('matches authors and returns all posts for a blank query', () => {
    expect(searchPosts(posts, ' sam ').map((post) => post.id)).toEqual([1, 3])
    expect(searchPosts(posts, '   ')).toHaveLength(3)
  })

  it('returns an empty result when nothing matches', () => {
    expect(searchPosts(posts, 'not here')).toEqual([])
  })
})
