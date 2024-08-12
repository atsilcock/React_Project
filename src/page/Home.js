import React, {useState, useEffect} from 'react'
import NavBar from "../component /NavBar"
import PetCard from "../component /PetCard"

function Home() {

    const [animals, setAnimals] = useState([])
    console.log(animals)

    useEffect(() =>{
        fetch("http://localhost:3000/dogBreeds")
        .then((r) => r.json())
        .then(data => setAnimals(data))
    },[])





  return (
    <div>
    <header>
        <NavBar  />
    </header>
    <main>
        <h1>
            Home Page
        </h1>
        {
            animals.map((animal) => <PetCard breed={animal.breed} photo={animal.photo} key={animal.breed}  />)
        }
    </main>

    </div>
  )
}


export default Home