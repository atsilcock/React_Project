import React, {useState} from 'react'
import AnimalHistory from "./AnimalHistory"

 function PetCard( { animal, clickedData, handleClick}) {
    const [toggleButton, setToggleButton] = useState(false)

    function myToggle(){
        setToggleButton(!toggleButton)
      }

return( 

<article key={animal.breed}> 
    <ul 
    href={animal.breed} > 
    <h2> {animal.breed} </h2> 
    <button onClick={myToggle}>History</button> 
    {/* <button onClick={(event)=> handleClick(event, animal)}>History</button> */}
    </ul>
    {toggleButton ? <AnimalHistory clickedData={clickedData}/> : null}
    <img className="photo-square" src={animal.photo}></img>
</article>)


 }


export default PetCard 