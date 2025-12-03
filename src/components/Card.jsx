export default function Card({actor, gender}) {
  return (
    <div className="card col">
              <img src={actor.image} className="card-img-top" alt={actor.name} />
              <div className="card-body">
                <h5 className="card-title mb-1">{actor.name}</h5>
                <p className='card-subtitle text-body-secondary fs-8'>{actor.birth_year}
                  {actor.death_year && ` - ${actor.death_year}`}
                </p>
                <p className='card-subtitle fs-7 text-info-emphasis'>{actor.nationality}</p>
                <p className="card-text">{actor.biography}</p>
                <div>
                  {/* {(actor.hasOwnProperty("known_for") || actor.hasOwnProperty("most_famous_movies") ? <p>Mr</p> : <p>boh</p>)} */}
                  <p className='border-bottom' >Most known for</p>
                  <ul className="list ps-0 mt-1">
                    {actor[gender === 'actors' ? "known_for" : "most_famous_movies"]?.map(
                      (movie, index) => (
                        <li key={index}>{movie}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
  )
} 