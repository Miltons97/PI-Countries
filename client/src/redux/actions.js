import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTERED_BY_ACTIVITIES = "FILTERED_BY_ACTIVITIES"
export const GET_ACTIVITIES        = "	GET_ACTIVITIES"
export const POST_ACTIVITIES = "POST_ACTIVITIES"


export function getAllCountries () {
    return async function (dispatch) {
        try {
            const json = await axios.get("/countries");
            return dispatch({
                type: "GET_ALL_COUNTRIES",
                payload:json.data,

            });
        } catch (error) {
            console.log("El error client actions")
            throw new Error("Error actions getAllCountries:", error.message);

        }
    }
}
export const orderByName = (order) => {
    return {type: ORDER_BY_NAME, payload: order}
}

export const orderByPopulation = (order) => {
    return {type: ORDER_BY_POPULATION, payload: order}
}

export function filterByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload: payload
    }
}

export function postActivity(actividad){
    return async function(dispatch){
    
                axios.post('/activities', actividad).then(res => {
                    return dispatch({
                      type: "POST_ACTIVITIES",
                      payload: res.data,
                    })
                    

                } ).catch(error => {dispatch({
                    type: "POST_ACTIVITIES",
                    payload: [],
                }); alert(error.response.data) 
            });
                
  
    // accion creator: retorna una funcion! en mi data viene la info               
    // busco la informacion cuando me la traiga haga un dispatch la accion va a reducer!
        // console.log(error)
      
    }
  }
  
  export const getAllActivities = () => {
      return async function (dispatch) {
          try {
              const apiData = await axios.get("/activities")
              
              const allActivities = apiData.data;
              dispatch({ type: GET_ACTIVITIES, payload: allActivities })
            } catch (error) {
                console.error(error);
                throw new Error("No se encontraron actividades")
            }
        };
       
  }
  

export const filterByActivities = (activities) => {
    console.log(activities)
    return { type: FILTERED_BY_ACTIVITIES, payload: activities }
}