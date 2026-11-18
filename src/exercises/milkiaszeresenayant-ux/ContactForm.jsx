import { useState } from 'react'
import { Button } from '../../components/shared/Button.jsx'
import { Input } from '../../components/shared/Input.jsx'

const initialFormData = { name: '', email: '', message: '' }

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [submittedName, setSubmittedName] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedName(formData.name.trim())
    setFormData(initialFormData)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submittedName && (
        <p className="success-message" role="status">
          Thanks for the note, {submittedName}!
        </p>
      )}
      <Input label="Name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
      <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
      <label className="field" htmlFor="exercise-message">
        <span className="field-label">Message</span>
        <textarea id="exercise-message" name="message" value={formData.message} onChange={handleChange} required rows={2} placeholder="Write a short message" />
      </label>
      <Button type="submit" size="small">Send message</Button>
    </form>
  )
}
