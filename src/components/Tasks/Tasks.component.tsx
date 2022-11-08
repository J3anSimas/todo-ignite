import styles from './Tasks.module.css'
import TasksInfo from '../TaskInfo/TasksInfo.component'
import TasksList from '../TasksList/TasksList.component'

export default function Tasks(): JSX.Element {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <TasksInfo text="Tarefas criadas" color="blue" counter={0} />
        <TasksInfo text="Concluídas" color="purple" counter={0} />
      </div>
      <TasksList />
    </div>
  )
}
