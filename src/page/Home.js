import React from 'react'
import NavBar from "../component /NavBar"
import PetCard from "../component /PetCard"


function Home({ animals, handleClick }) {

    

  return (
    <div>
    <header>
        <NavBar  />
    
    </header>
    <main>
        <h1 >
            Home Page </h1>
        {
            animals.map((animal,breed) =>(
                <PetCard breed={animal.breed} photo={animal.photo} key={breed} onClick={handleClick} />)
            ) 
        }
    </main>

    </div>
  )
}


export default Home