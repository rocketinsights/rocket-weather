import styles from './Reading.module.css';

export default function Wind({ children, title, value }) {

  return (
    <div className={styles.reading}>
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.value}>{value}</p>
      {children && children}
    </div>
  )
}