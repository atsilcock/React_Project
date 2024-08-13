import React from 'react'
import AdoptNow from "./AdoptNow"


 function AnimalHistory({  clickedData }) {

function adoptNowButtonClick (event){
  event.preventDefault()
  return console.log(event.target.value)
  
}

  function renderClick(){
    if(clickedData) {
      return (
        <ul>
          <li>Name: {clickedData.name}</li>
          <li> Breed: {clickedData.breed}</li>
          <li> Breed Type: {clickedData.breedType}</li>
          <li>Country of Origin: {clickedData.origin}</li>
          <li>  Temperament: {clickedData.temperament}</li>
          <li> Popularity 1-10: {clickedData.popularity}</li>
          <li>Hypoallergenic: {clickedData.hypoallergenic}</li>
          <li>Intelligence: {clickedData.intelligence}</li>
          
        </ul>
      )
    }
   
  }

  return (
    <div>
      <main>
        {renderClick()} 
        <AdoptNow adoptNowButtonClick={adoptNowButtonClick} /> 
      </main>
    </div>
  )

}


export default AnimalHistory