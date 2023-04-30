import React, { useEffect, useRef } from "react"
import styles from "./Landing.module.css"
import { NavLink } from "react-router-dom"
import ClipVid from '../../asses/ClipVid.mp4'

const Landing = () => {
    const videoRef = useRef(null);
 
    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
      }, []);

    return (
        <div className={styles.landingContainer} >
            <video className={styles.backgroundVideo} src={ClipVid} autoPlay loop muted  ref={videoRef}/>
            <div className={styles.content}>
            <h1 className={styles.title}> Countries of the world</h1>
            <NavLink className={styles.NavLink} to="/home">
                <button className ={styles.gradient}>Ingresar</button> 
            </NavLink>


            </div>
             
            
            

            <footer className={styles.footer}>
                <p>PI  Countries, Realizado por Milton Sosa</p> 
      
            </footer>
        </div>
    )
}

export default Landing