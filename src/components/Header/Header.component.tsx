import styles from './Header.module.css'
import Logo from '../../assets/todo-logo.svg'
export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={Logo} />
    </header>
  )
}
