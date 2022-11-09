import NewTask from './components/NewTask/NewTask.component'
import Header from './components/Header/Header.component'
import './global.css'
import styles from './App.module.css'
import Tasks from './components/Tasks/Tasks.component'
import { useState } from 'react'

export interface TaskInterface {
  id: string
  text: string
  done: boolean
}
function App(): JSX.Element {
  const [tasks, setTasks] = useState<TaskInterface[]>([])

  function checkAsDone(id: string): void {
    const tasksModified = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(tasksModified)
  }

  function removeTask(id: string): void {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <NewTask
            onCreateTask={({ id, text }) =>
              setTasks([...tasks, { id, text, done: false }])
            }
          />
          <Tasks
            tasks={tasks}
            onCheckAsDone={checkAsDone}
            onRemoveTask={removeTask}
          />
        </div>
      </main>
    </div>
  )
}

export default App
