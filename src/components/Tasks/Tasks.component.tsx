import styles from './Tasks.module.css'
import TasksList from '../TasksList/TasksList.component'

export default function Tasks(): JSX.Element {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <div className={styles.tasksInfoContainer}>
          <span className={styles.tasksInfoTitleCreated}>Tarefas criadas</span>
          <span className={styles.taskInfoCounter}>0</span>
        </div>
        <div className={styles.tasksInfoContainer}>
          <span className={styles.tasksInfoTitleDone}>Concluídas</span>
          <span className={styles.taskInfoCounter}>2 de 5</span>
        </div>
      </div>
      <TasksList />
    </div>
  )
}
