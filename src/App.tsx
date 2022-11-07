import NewTask from './components/Header/NewTask/NewTask.component'
import Header from './components/Header/Header.component'
import './global.css'
import styles from './App.module.css'

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <NewTask />
        </div>
      </main>
    </div>
  )
}

export default App
