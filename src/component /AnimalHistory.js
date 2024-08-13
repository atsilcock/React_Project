import React from 'react'

 function AnimalHistory({  animal }) {

function adoptNowButtonClick (event){
  event.preventDefault()
  return event.target.value
  
}

  function renderClick(){
    if(animal) {
      return (
        <ul>
          <li>Name:{animal.name}</li>
          <li> Breed: {animal.breed}</li>
          <li> Breed Type: {animal.breedType}</li>
          <li>Country of Origin: {animal.origin}</li>
          <li>  Temperament: {animal.temperament}</li>
          <li> Popularity 1-10: {animal.popularity}</li>
          <li>Hypoallergenic: {animal.hypoallergenic}</li>
          <li>Intelligence: {animal.intelligence}</li>
          <button onClick={adoptNowButtonClick}>Adopt Now </button>
        </ul>
      )
    }
   
  }

  return (
    <div>
      <main>
        {renderClick()} 
        <AdoptNow adoptNowButtonClick={adoptNowButtonClick} renderClick={renderClick}/> 
      </main>
    </div>
  )

}


export default AnimalHistory