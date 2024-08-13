import { Link } from 'react-router-dom'

function PetCard({ breed, photo }) {
  return (
    <div>
      <Link to={`/pets/${breed}`}>
        <article>
          
          <h2> {breed} </h2>  
        </article>
      </Link>
          <img class="photo-square" src={photo} alt={breed} />
    </div>
  )
}

export default PetCard