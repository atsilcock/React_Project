import React, {useState} from 'react'
import PetCard from "./PetCard" 

function Home({ animals }) {
    const [clickedData, setClickedData] = useState({})
    
    
   
    function handleClick(event, animal){
        event.preventDefault()
        setClickedData(animal)

      }

    const animalMap = animals.map((animal) => {
        console.log(animal)
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