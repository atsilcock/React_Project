import { Link } from 'react-router-dom'

function PetCard( { breed, photo }) {

  console.log(breed)
  return (
    <div>
      <article>
        <h2> Breed
          <ul>
            {breed}
          </ul>  
          <image src={photo}>
            
          </image>
        </h2>
        <Link to={`/src/page/Home.js${breed}`} />
      </article>
    </div>
  )
}

export default PetCard