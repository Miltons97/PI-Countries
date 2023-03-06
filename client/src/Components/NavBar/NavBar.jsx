import { Link, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import Img from "../Img/globe-2.png";
import styles from "./NavBar.module.css"
const NavBar = ({onSearch, name}) => {

    const location = useLocation()

    return (
        <div className={styles.NavBar}>
            <img className={styles.Logo} src= {Img} alt="logo"/>


            {location.pathname === "/home"  &&
                <SearchBar  onSearch={onSearch}></SearchBar>
            }
  
            { location.pathname === "/home" &&
                <button className={styles.link }><Link to = "/all"> Todos los paises </Link> </button>
            } 


            { location.pathname === "/all" &&
                <button className={styles.link}><Link to = "/home"> Pagina principal </Link> </button>
            }

            { location.pathname === "/all" &&
                <button className={styles.link}><Link to = "/create"> Crear Actividad Turistica </Link> </button>
            } 
 
            { location.pathname === "/create" &&
                <button className={styles.link}><Link to = "/home"> Pagina principal </Link> </button>
            }

            { location.pathname === "/create" &&
                <button className={styles.link}><Link to = "/all"> Todos los paises </Link> </button>
            }

            { location.pathname === "/home" && location.search === `/home?name=${name}` &&
                <button className={styles.link}><Link to = "/all"> Todos los paises </Link> </button>
            }



        
        </div>
    )
}

export default NavBar;