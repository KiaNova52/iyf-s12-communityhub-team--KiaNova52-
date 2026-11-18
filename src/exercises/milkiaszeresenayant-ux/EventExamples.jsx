import { useState } from 'react'
import { Button } from '../../components/shared/Button.jsx'

export function EventExamples() {
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState('Try a button or type in the field.')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(`Form submitted with: ${inputValue || 'an empty value'}`)
  }

  return (
    <div className="event-demo">
      <Button size="small" onClick={() => setMessage('Button clicked!')}>
        Click handler
      </Button>
      <form className="event-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="event-input">Event example input</label>
        <input
          id="event-input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
            setMessage(`Input value: ${event.target.value}`)
          }}
          placeholder="Type to trigger onChange"
        />
        <Button type="submit" size="small" variant="secondary">Submit</Button>
      </form>
      <p className="event-feedback" role="status">{message}</p>
    </div>
  )
}
