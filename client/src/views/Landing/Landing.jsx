import React from "react"
import styles from "./Landing.module.css"
import { NavLink } from "react-router-dom"

const Landing = () => {
    return (
        <div className={styles.landingContainer} >


            <h1 className={styles.title}> Countries of the world</h1>
            
            
            <NavLink className={styles.NavLink} to="/home">
                <button className ={styles.gradient}>Ingresar</button> 
            </NavLink>

            <footer className={styles.footer}>
                <p>PI  Countries, Realizado por Milton Sosa</p> 
      
            </footer>
        </div>
    )
}

export default Landing