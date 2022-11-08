import NewTask from './components/NewTask/NewTask.component'
import Header from './components/Header/Header.component'
import './global.css'
import styles from './App.module.css'
import Tasks from './components/Tasks/Tasks.component'

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <NewTask />
          <Tasks />
        </div>
      </main>
    </div>
  )
}

export default App
