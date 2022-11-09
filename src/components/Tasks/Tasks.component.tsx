import styles from './Tasks.module.css'
import TasksList from '../TasksList/TasksList.component'
import { TaskInterface } from '../../App'

interface TasksPropsInterface {
  tasks: TaskInterface[]
  onCheckAsDone: (id: string) => void
  onRemoveTask: (id: string) => void
}
export default function Tasks({
  tasks,
  onCheckAsDone,
  onRemoveTask
}: TasksPropsInterface): JSX.Element {
  function getFinishedTasksCount(): number {
    let finishedTasksCount = 0
    tasks.forEach((task) => {
      if (task.done) finishedTasksCount++
    })
    return finishedTasksCount
  }
  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <div className={styles.tasksInfoContainer}>
          <span className={styles.tasksInfoTitleCreated}>Tarefas criadas</span>
          <span className={styles.taskInfoCounter}>{tasks.length}</span>
        </div>
        <div className={styles.tasksInfoContainer}>
          <span className={styles.tasksInfoTitleDone}>Concluídas</span>
          <span className={styles.taskInfoCounter}>
            {tasks.length > 0
              ? `${getFinishedTasksCount()} de ${tasks.length}`
              : 0}
          </span>
        </div>
      </div>
      <TasksList
        tasks={tasks}
        onCheckAsDone={onCheckAsDone}
        onRemoveTask={onRemoveTask}
      />
    </div>
  )
}
