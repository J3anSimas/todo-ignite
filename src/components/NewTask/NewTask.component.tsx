import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { v4 } from 'uuid'
import styles from './NewTask.module.css'

interface onCreateTaskParamsInterface {
  id: string
  text: string
}
interface NewTaskInterface {
  onCreateTask: ({ id, text }: onCreateTaskParamsInterface) => void
}
export default function NewTask({
  onCreateTask
}: NewTaskInterface): JSX.Element {
  const [taskText, setTaskText] = useState('')

  function handleCreateTask(): void {
    onCreateTask({
      id: v4(),
      text: taskText
    })
    setTaskText('')
  }
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button title="Criar" onClick={handleCreateTask}>
        Criar <PlusCircle width={16} height={16} weight="bold" />
      </button>
    </div>
  )
}
