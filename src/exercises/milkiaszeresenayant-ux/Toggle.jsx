import { useState } from 'react'
import { Button } from '../../components/shared/Button.jsx'

export function Toggle() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="toggle-demo">
      <p>The toggle is <strong>{isOn ? 'ON' : 'OFF'}</strong></p>
      <Button
        size="small"
        variant={isOn ? 'secondary' : 'primary'}
        aria-pressed={isOn}
        onClick={() => setIsOn((value) => !value)}
      >
        Turn {isOn ? 'off' : 'on'}
      </Button>
    </div>
  )
}
