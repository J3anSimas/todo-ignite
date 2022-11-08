import styles from './TasksInfo.module.css'

interface TasksInfoProps {
  text: string
  color: 'blue' | 'purple'
  counter: number
}
export default function TasksInfo({
  text,
  color,
  counter
}: TasksInfoProps): JSX.Element {
  return (
    <div className={styles.tasksInfo}>
      {color === 'blue' ? (
        <span className={styles.blue}>{text}</span>
      ) : (
        <span className={styles.purple}>{text}</span>
      )}
      <span className={styles.counter}>{counter} </span>
    </div>
  )
}
