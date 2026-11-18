export function sortNewestFirst(posts) {
  return [...posts].sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime(),
  )
}

export function searchPosts(posts, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase()

  if (!normalizedQuery) return [...posts]

  return posts.filter((post) =>
    [post.title, post.excerpt, post.author, post.category]
      .filter(Boolean)
      .some((value) => value.toLocaleLowerCase().includes(normalizedQuery)),
  )
}
