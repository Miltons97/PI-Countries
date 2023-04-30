import React, { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getAllCountries, postActivity } from "../../redux/actions"

import styles from "./Form.module.css"


export default function Form() {
    const dispatch = useDispatch();
     const countries = useSelector((state) => state.countries)
    const countriesNames = countries.map((country) => {

        return { label: country.name, value: country.id }
})

    const navigate = useNavigate()
    const activities = useSelector((state) => state.activities)

   

    useEffect(() => {
    dispatch(getAllCountries())
    }, [dispatch])
//  Seteamos los input aqui se van a alojar los valores de los estados definidos en mi form!
    const [input, setInputData] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
    })

    const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    })
// Mis handlesInpu: Aca definimos la funcion para que cuando cambie mi valor de los input seteamos las propiedades definidas!
    const handleInputChange = (e) => {
        setInputData({
        ...input,
        [e.target.name]: e.target.value,   // seteamos todos con la misma funcion utilizando  la braquet notation!
        })
        setErrors(
            validate({
            ...input,
            [e.target.name]: e.target.value,
        })
    )
    }

        function handleSelect (e) {
        setInputData({
            ...input,
            countryId: [...input.countryId, e.target.value],
            })
        }
// creamos la posActivity , creamos una actividad , y la guardo en mi reducer, a traves de mi dispatch
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.name && input.difficulty && input.season && input.countryId.length) {
            dispatch(postActivity(input))
            alert("Actividad creada correctamente")
            setInputData({
                name: "",
                difficulty: 0,
                duration: 0,
                season: "",
                countryId: [],
        })
        navigate("/all")
        } else {
            e.preventDefault()
            alert("Por favor complete todos los campos")
        }
    }

    const handleDelete = (e, d) => {
        e.preventDefault()
        setInputData({
        ...input,
        countryId: input.countryId.filter((country) => country !== d),
        })
        }

    const validate = (input) => {
        let errors = {}

        if (!input.name) {
            errors.name = "Ingrese un nombre"
        } else if (activities.map((activity) => activity.name).some((name) => name === input.name)) {
            errors.name = "El nombre ingresado ya existe"
        }
  
        if (/^((?:[1-9]|1[0-9]|2[0-4])?)$/.test(input.duration)) {
            setErrors({ ...errors, duration: "" })
        } else {
            errors.duration = "La duracion de la actividad debe ser entre 1 y 24 hs"
        }
  
        if (!input.difficulty || input.difficulty < 1 || input.difficulty > 5) {
            errors.difficulty = "Ingrese una valor para identificar la dificultad"
        }
        
        if (!input.duration) {
            errors.duration = "Ingrese la duracion"
        }
  
        if (!input.season) {
            errors.season = "Ingrese la temporada"
        }
  
    return errors  
    }

    return (
        <div className={styles.formContainer}>
           
       

            
            <form onSubmit={(e) => handleSubmit(e)} className= {styles.form}>
                <div>
                    <label> Nombre: </label>
                    <input className={styles.infos}
                        type='text'
                        value={input.name}
                        name='name'
                        id = "name"
                        onChange={(e) => handleInputChange(e)}
                        
                    />
                    {<p className={styles.error} >{errors.name ? errors.name : null}</p>}
                </div>
                
                <div>
                    <label> Dificultad: </label>
                    <input
                    className={styles.infos}
                        type='number'
                        min='1'
                        max='5'
                        value={input.difficulty}
                        name='difficulty'
                        id = "dificultad"
                        onChange={(e) => handleInputChange(e)}
                    /> <span className={styles.addText}>(min: 1 - max: 5)</span>
                    {<p className={styles.error} >{errors.difficulty ? errors.difficulty : null}</p>}
                </div>
                
                <div>
                    <label > Duración: </label>
                    <input
                    className={styles.infos}
                        type='number'
                        value={input.duration}
                        name='duration'
                        id = "duracion"
                        onChange={(e) => handleInputChange(e)}
                    /> <span className={styles.addText}> horas </span>
                    {<p className={styles.error} >{errors.duration ? errors.duration : null}</p>}
                </div>
                
                <div>
                    <span> Temporada: </span>
                    <select className="input" name="season" onChange={(e) => handleInputChange(e)}>
                        <option value="empty"> </option>
                        <option value="Invierno" key="Invierno">Invierno</option>
                        <option value="Otoño" key="Otoño">Otoño</option>
                        <option value="Primavera" key="Primavera">Primavera</option>
                        <option value="Verano" key="Verano">Verano</option>
                    </select>
                    {errors.season && <p className={styles.error} >{errors.season}</p>}
                </div>
             
                <div>
                    <span > Paises donde se puede practicar: </span>
                    <div className={styles.countrySelect}> 
                        <select onChange={(e) => handleSelect(e)}>
                            {countriesNames.sort((a, b) => a.label.localeCompare(b.label)).map(country => {
                            return <option key={country.value} value={country.value}>{country.label}</option>
                            })}
                        </select>
                    </div>
                </div>
    
                <div>
                <br></br>
                    {input.countryId.length > 0 && (
                        <span className={styles.alertConfirm}> Creando una actividad </span>)}
                    {input.countryId.map((c) => (
                        <div>
                            <span className={styles.paisId}>{c}</span>
                            <button onClick={(e) => handleDelete(e, c)} className={styles.btnX}>X</button>
                        </div>
                    ))}
                    <div className={styles.buttons}>
                        <button>Confirmar</button>
                    </div>
                </div>
           
            </form>
      

      </div>
    )
}




 // case FILTER_BY_DIETS:
    //   const filterByDiets = state.filteredData.filter((restaurant) =>
    //     restaurant.diets.includes(payload)
    //   );

    //   const filteredLis= payload===""?state.filteredData: filterByDiets
    //   return { ... state , currentListRestaurants: filteredLis };

    //   case FILTER_BY_MENU:
    //     const filterBymenu = state.filteredData.filter((restaurant) =>
    //       restaurant.menu.includes(payload)
    //     );
    //     const filteredListMenu = payload === "" ? filteredLis: filterBymenu;
    //     return { ...state, currentListRestaurants: filteredListMenu };


    // case FILTER_BY_ACTIVE:
    //   const filteredData = state.filteredData.filter(
    //     (item) => item.active === payload
    //   );
    //   const filteredLi = payload === "" ? state.filteredData : filteredData;
    //   return {
    //     ...state,
    //     currentListRestaurants: filteredLi,
    //   };




//     import React, {useState} from "react";
// import { View, Text, StyleSheet } from "react-native";
// import firebase from "firebase/app"
// import {Button} from "react-native-elements"
// import Login from "../Login/Login";


// export default function ListReviews({navigation, id}) {
//     const [userLogged, setUserLogged] = useState(false)

//     firebase.auth().onAuthStateChanged((user) => {
//         user ? setUserLogged(true) : setUserLogged(false)
//     })

//     return (
//    <View>
//      {
//         userLogged ? (
//             <Button
//             buttonStyle={style.btnReviews}
//             title = "Escribe una opinion"
//             titleStyle={style.titleReviews}
//             icon = {{
//                 type:"material-community",
//                 name:"square-edit-outline",
//                 color: "#a376c7"
//             }}
//             />

//         ) :(
//             <Text
//             style={style.buttonLog}
//             onPress={()=> navigation.navigate("login")}
//             >
//                  Para realizar tu opinion es necesario estar registrado.{""}
//                  <Text style={style.login}>
//                     Pulsa AQUÍ para iniciar seción.
//                  </Text>
//             </Text>

//         )
//      }
//    </View>
// )
// }

// const style= StyleSheet.create({
//     btnReviews:{
//      backgroundColor: "trasnparent"
//     },

//    titleReviews:{
//      color:"#a376c7"
//    },
   
//    buttonLog:{
//     textAlign:"center",
//     color:"#a376c7",
//     padding:20,

//    },
   
//    login:{

//     fontWeight:"bold"
//    }
   
   

// })