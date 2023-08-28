import styles from './index.module.scss'

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <a href="https://www.ssd.uz/" target="_blank">
          <img src={"https://www.ssd.uz/wp-content/themes/ssd_theme/img/logo.png"} className={styles.logo} alt="SSD logo" />
        </a>
      </div>
      <h1>React + Typescript + Vite</h1>
    </div>
  )
}

