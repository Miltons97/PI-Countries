// Este componente debe mostrar la info de cada pais pero a su vez nos tiene que traer un link de cada pais con su info1
import { NavLink, useLocation } from "react-router-dom"
import styles from "./Card.module.css"

const Card = (props) => {
  const location = useLocation();
  const showCloseButton = location.pathname === "/home"

    return (
        <div className={styles.card}>
            <div className={styles.divButton}>
             {showCloseButton && (
            <button onClick={props.onClose} className={styles.buttonX}>X</button>  )}


            </div>

            <div className={styles.icon}>
            
                <img src= {props.flag} alt={props.name} className={styles.img}></img>
            </div>
                <p>{props.name}</p>
            <div className={styles.content}>
                <p>Continent: {props.continent}</p>
                 <NavLink className={styles.nav} to= {`/home/${props.id}`}>
                 <button className={styles.moreInfo}>
                    Mas info
                 </button> 
                 </NavLink>
            </div>
        </div>
    )
}

export default Card



