import styles from './Wind.module.css';

export default function Wind({ windData }) {
  const { wind_dir_last, wind_speed_last } = windData;

  const getWindDirection = (deg) => {
    if (deg > 348.75 && deg < 11.25) return 'N';
    else if (deg > 11.25 && deg < 33.75) return 'NNE';
    else if (deg > 33.75 && deg < 56.25) return 'NE';
    else if (deg > 56.25 && deg < 78.75) return 'ENE';
    else if (deg > 78.75 && deg < 101.25) return 'E';
    else if (deg > 101.25 && deg < 123.75) return 'ESE';
    else if (deg > 123.75 && deg < 146.25) return 'SE';
    else if (deg > 146.25 && deg < 168.75) return 'SSE';
    else if (deg > 168.75 && deg < 191.25) return 'S';
    else if (deg > 191.25 && deg < 213.75) return 'SSW';
    else if (deg > 213.75 && deg < 236.25) return 'SW';
    else if (deg > 236.25 && deg < 258.75) return 'WSW';
    else if (deg > 258.75 && deg < 281.25) return 'W';
    else if (deg > 281.25 && deg < 303.75) return 'WNW';
    else if (deg > 303.75 && deg < 326.25) return 'NW';
    else if (deg > 326.25 && deg < 348.75) return 'NNW';
    else return '?';
  }

  return (
    <div>
      <h2>
        {Math.round(wind_speed_last)}<small>mph </small>
        {getWindDirection(wind_dir_last)}
      </h2>
      <div className={styles.face}>
        <span className={`${styles.dir} ${styles.n}`}>N</span>
        <span className={`${styles.dir} ${styles.e}`}>E</span>
        <span className={`${styles.dir} ${styles.s}`}>S</span>
        <span className={`${styles.dir} ${styles.w}`}>W</span>

        <div className={styles.arrow} style={{
          transform: `translateX(-50%) translateY(-100%) rotate(${wind_dir_last}deg)`
        }}></div>
      </div>
      <h2>{/*getWindDirection()*/}</h2>
    </div>
  )
}