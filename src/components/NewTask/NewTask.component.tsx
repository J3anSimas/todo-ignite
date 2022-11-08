import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export default function NewTask(): JSX.Element {
  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button title="Criar">
        Criar <PlusCircle width={16} height={16} weight="bold" />
      </button>
    </div>
  )
}
