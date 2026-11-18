import { Card } from '../../components/shared/Card.jsx'
import { Button } from '../../components/shared/Button.jsx'
import { Counter } from './Counter.jsx'
import { ContactForm } from './ContactForm.jsx'
import { EventExamples } from './EventExamples.jsx'
import { Greeting } from './Greeting.jsx'
import { Intro } from './Intro.jsx'
import { LiftedStateExample } from './LiftedStateExample.jsx'
import { PageLayout } from './PageLayout.jsx'
import { Toggle } from './Toggle.jsx'
import { TodoList } from './TodoList.jsx'
import { UserList } from './UserList.jsx'

const sampleUsers = [
  { id: 1, name: 'Amina Otieno', role: 'Frontend learner' },
  { id: 2, name: 'Brian Kamau', role: 'Community mentor' },
]

export function PracticeLab() {
  return (
    <div className="practice-lab">
      <Intro />
      <div className="exercise-grid">
        <Card title="Daily challenge · Day 1: Greeting" variant="outlined">
          <Greeting name="Guest" timeOfDay="morning" />
        </Card>
        <Card title="Daily challenge · Day 2: Card" variant="outlined">
          <Card title="Learning together" variant="secondary" className="nested-card">
            <p>Cards can compose any children, from text to buttons.</p>
          </Card>
        </Card>
        <Card title="Daily challenge · Day 3: User list" variant="outlined">
          <UserList users={sampleUsers} />
          <UserList />
        </Card>
        <Card title="Task 16.1 · Counter state" variant="outlined">
          <Counter />
        </Card>
        <Card title="Task 16.1 · Toggle state" variant="outlined">
          <Toggle />
        </Card>
        <Card title="Daily challenge · Day 4: Button" variant="outlined">
          <div className="button-showcase">
            <Button size="small">Primary</Button>
            <Button size="small" variant="secondary">Secondary</Button>
            <Button size="small" variant="danger">Danger</Button>
            <Button size="small" loading>Saving</Button>
          </div>
        </Card>
        <Card title="Task 16.2 · Event handlers" variant="outlined">
          <EventExamples />
        </Card>
        <Card title="Task 16.2 · Controlled form" variant="outlined">
          <ContactForm />
        </Card>
        <Card title="Task 16.3 · Array state" variant="outlined">
          <TodoList />
        </Card>
        <Card title="Task 16.4 · Lifted state" variant="outlined">
          <LiftedStateExample />
        </Card>
        <Card title="Daily challenge · Day 5: Layout" variant="outlined">
          <PageLayout sidebar={<span>Optional sidebar content</span>}>
            <p>Page layouts compose a header, main content, optional sidebar, and footer.</p>
          </PageLayout>
        </Card>
        <Card title="Task 15.4 · Conditional rendering" variant="outlined">
          <Greeting name="Learning friend" timeOfDay="afternoon" />
          <p>Use a condition to show different content for different states.</p>
        </Card>
      </div>
    </div>
  )
}
