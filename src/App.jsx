import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    console.log("useEffect is happening");
    fetchData()
  }, []);

  function fetchData() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((resp) => {
        console.log("fetchData is happening");
        setActresses(resp.data);
      })
  }

  return (
    <>
      <h1 className='text-center py-4'>Actresses</h1>
      <div className="container">
        <div className="row row-cols-3">
          {actresses.map(actress =>
            <div className="card col" key={actress.id}>
              <img src={actress.image} className="card-img-top" alt={actress.name} />
              <div className="card-body">
                <h5 className="card-title mb-1">{actress.name}</h5>
                <p className='card-subtitle text-body-secondary fs-8'>{actress.birth_year}
                  {actress.death_year && ` - ${actress.death_year}`}
                </p>
                <p className='card-subtitle fs-7 text-info-emphasis'>{actress.nationality}</p>
                <p className="card-text">{actress.biography}</p>
                <div>
                  <p className='border-bottom'>Most Known for</p>
                  <ul className="list ps-0 mt-1">
                    {actress.most_famous_movies.map((movie, index) =>
                      <li key={index}>{movie}</li>
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
