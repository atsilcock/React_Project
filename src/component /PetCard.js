import { Link } from 'react-router-dom'

function PetCard({ breed, photo, onClick }) {
  return (
    <div>
      <Link to={`../page/AnimalHistory.js}`}>
        <article onClick={onClick}>
          <h2> {breed} </h2>  
        </article>
      </Link>
          <img class="photo-square" src={photo} alt={breed} />
    </div>
  )
}

export default PetCard