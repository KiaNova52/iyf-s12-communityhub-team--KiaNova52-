export function Greeting({ name = 'Guest', timeOfDay = 'day' }) {
  const greeting =
    timeOfDay === 'morning'
      ? 'Good morning'
      : timeOfDay === 'afternoon'
        ? 'Good afternoon'
        : timeOfDay === 'evening'
          ? 'Good evening'
          : 'Hello'

  return <p className="greeting-message">{greeting}, {name}!</p>
}
