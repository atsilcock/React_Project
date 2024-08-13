import React, { useState, useEffect } from "react"
import AdoptNow from "./GiveYourAnimal"
import Home from "./Home"
import AnimalHistory from "./AnimalHistory"
import NavBar from "../Pages/NavBar"

function App() {
    const [animals, setAnimals] = useState([])
    

    useEffect(() =>{
        fetch("http://localhost:3000/dogBreeds")
        .then((r) => r.json())
        .then(data => setAnimals(data))
    },[])
    

    return (
    
    <div className="App">
      <NavBar />
      <Home animals={animals} />
      <AnimalHistory animals={animals}/>
      <AdoptNow />
    </div>
  );
}

export default App;
