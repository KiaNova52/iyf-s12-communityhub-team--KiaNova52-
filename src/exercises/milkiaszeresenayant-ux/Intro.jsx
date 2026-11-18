import { useState } from 'react'

export function Intro({
  name = 'Your Name',
  facts = [
    'I am building my React skills one component at a time.',
    'I enjoy turning ideas into useful web experiences.',
    'This is where I practice, experiment, and keep learning.',
  ],
}) {
  const [now] = useState(() => new Date())
  const hour = now.getHours()
  const timeOfDay =
    hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'

  return (
    <section className="intro-exercise">
      <p className="eyebrow">Task 15.1 · JSX</p>
      <h3>Hello, I’m {name}!</h3>
      <p className="intro-date">
        Today is {now.toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <p className="intro-greeting">Good {timeOfDay} — welcome to my intro.</p>
      <div className="intro-facts">
        {facts.map((fact) => <p key={fact}>{fact}</p>)}
      </div>
    </section>
  )
}
