import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export default function Task(): JSX.Element {
  return (
    <div className={styles.task}>
      <input type="checkbox" name="" id="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        laudantium eveniet excepturi a illum repellendus recusandae ad eaque
      </p>
      <button title="Excluir">
        <Trash size={24} />
      </button>
    </div>
  )
}
