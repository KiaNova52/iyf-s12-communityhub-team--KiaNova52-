import { useState } from 'react'
import { Button } from '../shared/Button.jsx'
import { Card } from '../shared/Card.jsx'
import { Input } from '../shared/Input.jsx'

export function CreatePost({ onCreatePost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedTitle = title.trim()
    const trimmedContent = content.trim()

    if (!trimmedTitle || !trimmedContent) return

    onCreatePost({
      title: trimmedTitle,
      excerpt:
        trimmedContent.length > 150
          ? `${trimmedContent.slice(0, 147)}...`
          : trimmedContent,
      content: trimmedContent,
    })
    setTitle('')
    setContent('')
  }

  return (
    <Card title="Have something to share?" className="create-card">
      <p className="form-intro">
        A question, a small win, or a lesson learned — it all belongs here.
      </p>
      <form className="create-post-form" id="create-post" onSubmit={handleSubmit}>
        <Input
          label="Post title"
          name="post-title"
          placeholder="Give your story a title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          maxLength={100}
        />
        <label className="field" htmlFor="post-content">
          <span className="field-label">Your story</span>
          <textarea
            id="post-content"
            name="post-content"
            placeholder="What have you been learning lately?"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
            rows={3}
            maxLength={1000}
          />
        </label>
        <div className="form-actions">
          <span className="form-hint">Be kind. Stay curious.</span>
          <Button type="submit" size="small">Publish story <span aria-hidden="true">↗</span></Button>
        </div>
      </form>
    </Card>
  )
}
