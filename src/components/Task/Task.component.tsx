import { Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import CheckedTask from '../../assets/checkTask.svg'

interface TaskProps {
  id: string
  text: string
  done: boolean
  onCheckAsDone: (id: string) => void
  onRemoveTask: (id: string) => void
}
export default function Task({
  id,
  text,
  done,
  onCheckAsDone,
  onRemoveTask
}: TaskProps): JSX.Element {
  function handleCheckTask(): void {
    onCheckAsDone(id)
  }
  function handleRemoveTask(): void {
    onRemoveTask(id)
  }
  return (
    <div className={styles.task}>
      <button className={styles.checkButton} onClick={handleCheckTask}>
        {done ? (
          <img src={CheckedTask} className={styles.checkDone} />
        ) : (
          <Circle size={24} className={styles.checkNotDone} />
        )}
      </button>
      <p>{text}</p>
      <button
        title="Excluir"
        className={styles.removeButton}
        onClick={handleRemoveTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
