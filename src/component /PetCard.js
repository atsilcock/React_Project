import React, {useState} from 'react'
import AnimalHistory from "./AnimalHistory"

 function PetCard( { animal, clickedData }) {
    const [toggleButton, setToggleButton] = useState(false)

    function myToggle(){
        setToggleButton(!toggleButton)
      }

return( 

<article key={animal.breed}> 
    <ul> 
    <h2> {animal.breed} </h2> 
    <button onClick={myToggle}>History</button> 
    </ul>
    {toggleButton ? <AnimalHistory animal={animal}/> : null}
    <img className="photo-square" src={animal.photo}></img>
</article>)


 }


export default PetCard 