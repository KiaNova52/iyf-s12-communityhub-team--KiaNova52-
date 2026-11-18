import { useState } from 'react'
import { Button } from '../../components/shared/Button.jsx'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-demo">
      <p className="demo-value">Count: <strong>{count}</strong></p>
      <div className="demo-actions">
        <Button size="small" onClick={() => setCount((value) => value + 1)}>Increment</Button>
        <Button size="small" variant="secondary" onClick={() => setCount((value) => value - 1)}>Decrement</Button>
        <Button size="small" variant="quiet" onClick={() => setCount(0)}>Reset</Button>
      </div>
    </div>
  )
}
