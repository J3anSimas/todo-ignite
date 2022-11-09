import { ClipboardText } from 'phosphor-react'
import { useState } from 'react'
import { TaskInterface } from '../../App'
import Task from '../Task/Task.component'

import styles from './TasksList.module.css'

interface TasksListProps {
  tasks: TaskInterface[]
  onCheckAsDone: (id: string) => void
  onRemoveTask: (id: string) => void
}
export default function TasksList({
  tasks,
  onCheckAsDone,
  onRemoveTask
}: TasksListProps): JSX.Element {
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
      ) : (
        tasks.map(({ id, text, done }) => (
          <Task
            key={id}
            id={id}
            text={text}
            done={done}
            onCheckAsDone={onCheckAsDone}
            onRemoveTask={onRemoveTask}
          />
        ))
      )}
    </div>
  )
}
