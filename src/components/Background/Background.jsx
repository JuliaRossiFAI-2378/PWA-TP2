import fondo from '../../assets/fondo.jpg';
import styles from './Background.module.css'

const Background = () => {
    return (
      <img src={fondo} className={styles.background}/>
    );
  }
  

  export default Background