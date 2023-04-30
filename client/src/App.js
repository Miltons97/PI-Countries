
import React, { useState } from "react"
import { Route, Routes, useLocation, } from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar.jsx"
import Cards from './Components/Cards/Cards.jsx'
import{Landing,Detail,Form,FilterCountries} from "./views"
import axios from "axios";

axios.defaults.baseURL='http://localhost:3001/'
function App() {

  const [countries, setCountries] = useState([]);
  // console.log(countries)
  const location = useLocation()


  function onSearch(name) {
  
    fetch(`/countries?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (Array.isArray(data) && data.length > 0) {
          setCountries((oldCountries) => [...oldCountries, data[0]])
        } else {
          window.alert('No se encontraron resultados para el país ingresado.')
        }
      });
  }


  function onClose(id) {
    setCountries(oldCountries => oldCountries.filter(country => country.id !== id))
  }

  return (


    <div className="App" >

      {location.pathname !== "/" &&
        <div>
          <NavBar onSearch={onSearch}></NavBar>
        </div>
      }



      <Routes>

        < Route exact path="/" element={<Landing></Landing>} ></Route>
        <Route path="/home" element={<Cards countries={countries} onClose={onClose} />} ></Route>
        <Route path="/home/:id" element={<Detail></Detail>} ></Route>
        < Route path="/create" element={<Form></Form>} ></Route>
        < Route path="/all" element={<FilterCountries></FilterCountries>} ></Route>
     


      </Routes>





    </div>

  );
}

export default App


























// import './App.css';
// import {Home,Detail,Form,Landing} from "./views"

// import { Route, useLocation } from "react-router-dom";
// import NavBar from './Components/NavBar/NavBar';

// function App() {

//   const location = useLocation();


//   return (
//     <div className="App">
//      {location.pathname !== "/" && <NavBar />}
//       <Route exact path="/" component={Landing} />
//       <Route exact path="/detail" component={Detail} />
//       <Route exact path="/create" component={Form} />

//       <Route path="/home">
//         <Home />
//       </Route>
//     </div>
//   );
// }





// export default App;
