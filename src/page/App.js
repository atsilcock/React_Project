import React, { useState, useEffect } from "react"
import AdoptNow from "./AdoptNow"
import Home from "./Home"
import AnimalHistory from "./AnimalHistory"


function App() {
    const [animals, setAnimals] = useState([])
    console.log(animals)

    useEffect(() =>{
        fetch("http://localhost:3000/dogBreeds")
        .then((r) => r.json())
        .then(data => setAnimals(data))
    },[])
    



    function handleClick(event){
       return event.target.value
    }

    return (
    
    <div className="App">
      <Home animals={animals} handleClick={handleClick} />
      <AnimalHistory />
      <AdoptNow />
    </div>
  );
}

export default App;
