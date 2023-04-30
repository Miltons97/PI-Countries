import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams,} from "react-router-dom"
import { getAllActivities } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail =()=> {
	const dispatch = useDispatch();

	
	const { id } = useParams();
    const [ country, setCountry] = useState({
        flag: "",
        name: "",
        countryCode: "",
        continent: "",
        capital: "", 
        subRegion: "",
        population: "",
        activities: []
       
    })
    useEffect(() => {
        fetch(`http://localhost:3001/countries/${id}`)
           .then((response) => response.json())
           .then((country) => {
			console.log(country)
              if (country.name) {
                 setCountry(country);
              } else {
                 window.alert('No hay actividades con ese ID');
              }
           })
		   
          dispatch(getAllActivities())
     }, [id, dispatch])
    

	return (
	
		
		<div>
		<div className={style.container}>
				<div className={style.cardDetail}>
			<h2 className={style.title}>Country details</h2>
					
							<div className={style.left}>
								<img
									className={style.flag}
									src={country.flag}
									alt=""
								></img>
							</div>
							<div className={style.right}>
								<h2 className={style.name}>{country.name}</h2>
								<h4 className={style.tag}>Continent: {country.continent}</h4>
								<h4>Code: {country.id}</h4>
								<h4>Capital: {country.capital}</h4>
								<h4>Region: {country.subRegion}</h4>
								<h4>Area: {country.area} km²</h4>
								<h4>Population: {country.population} Hab.</h4>
							</div>
						</div>
				
		
	  		</div>

		<div>
					<h3>Country's Activities</h3>
					
						{country.activities.map((activity) => (
							  <li  key={activity.id}> {activity.name} 
							  <span>Temporada: {activity.season} - Dificultad: {activity.difficulty}</span>  
						  </li>
								
						
						))}
					
		
					<div className={style.buttons}>

				      <div>
                <button className ={style.buttonDetail}> 
					<NavLink className = {style.navDetail} to = "/home">Regresar a la página principal </NavLink>
				</button>
            </div>
			<div>
			
				<button className={style.buttonDetail}>
			<NavLink className = {style.navDetail} to =  "/home"> Todos los Paises </NavLink>

				</button>
                </div>   
			<div>
                <button className = {style.buttonDetail}>
				<NavLink className = {style.navDetail} to =  "/create">Crear actividad turistica </NavLink>
				</button>
            </div>
					</div>
				</div>	


	
			</div>
			
	  
	);
}

export default Detail;