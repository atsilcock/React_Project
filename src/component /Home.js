import React, {useState} from 'react'
import AnimalHistory from './AnimalHistory';
import PetCard from "./PetCard" 

function Home({ animals }) {
    const [clickedData, setClickedData] = useState({})
    console.log(clickedData)
    
   
    function handleClick(event, animal){
        event.preventDefault()
        setClickedData(animal)
      }

    const animalMap = animals.map((animal) => {
        return (
            <PetCard clickedData={clickedData} handleClick={handleClick} animal={animal} />
      )  
    })
  return (
    <div>
        <h1 > Home Page </h1>
    <main>
        <article>
        {animalMap}
        </article>
       
    </main>
        

    </div>
  )
}


export default Home