import { ClipboardText } from 'phosphor-react'
import { useState } from 'react'

import styles from './TasksList.module.css'
export default function TasksList(): JSX.Element {
  const [tasks, setTasks] = useState<number[]>([])
  return (
    <div className={styles.tasksList}>
      {tasks.length === 0 ? (
        <div className={styles.noTasks}>
          <ClipboardText width={56} height={56} color="#3d3d3d" />
          <span>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </div>
      ) : null}
    </div>
  )
}
