import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [actors, setActors] = useState([]);
  const baseUrl = "https://lanciweb.github.io/demo/api/";
  const [gender, setGender] = useState('actors');

  useEffect(() => {
    console.log("useEffect is happening");
    fetchData();
  }, [gender]);

  function fetchData() {
    axios.get(`${baseUrl}${gender}/`)
      .then((resp) => {
        console.log("fetchData is happening");
        setActors(resp.data);
      });
  }
  return (
    <>
      <h1 className='text-center py-4'>
        {gender === 'actors' ? "Actors" : "Actresses"}
      </h1>
      <div className="container">
        <div className="btn-container text-center mb-3 ">
          <button className='btn btn-primary border' onClick={() => setGender('actors')}>See Actors</button>
          <button className='btn btn-primary border' onClick={() => setGender('actresses')}>See Actresses</button>
        </div>
        <div className="row row-cols-3">
          {actors.map(actor =>
            <div className="card col" key={actor.id}>
              <img src={actor.image} className="card-img-top" alt={actor.name} />
              <div className="card-body">
                <h5 className="card-title mb-1">{actor.name}</h5>
                <p className='card-subtitle text-body-secondary fs-8'>{actor.birth_year}
                  {actor.death_year && ` - ${actor.death_year}`}
                </p>
                <p className='card-subtitle fs-7 text-info-emphasis'>{actor.nationality}</p>
                <p className="card-text">{actor.biography}</p>
                <div>
                  <p className='border-bottom'>Most known for</p>
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
          )}
        </div>
      </div>
    </>
  )
}

export default App
