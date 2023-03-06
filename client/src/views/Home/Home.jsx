import { useEffect , useSelector} from "react"
import { useDispatch } from "react-redux"
import {
    getAllCountries,

} from "../../redux/actions"
import Cards from "../../Components/Cards/Cards"
import styles from "./Home.module.css"



const Home = () => {
    

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        if (!countries.length) {
            dispatch(getAllCountries());
        }
    }, [dispatch, countries.length]);

    

    return (
        <div className={styles.Home}>
           
            <Cards></Cards>
        </div>
    )
}

export default Home