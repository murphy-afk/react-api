import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './components/Card';
import Button from './components/Button';

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
          <Button handleCLick={() => setGender('actors')} gender={"Actors"}/>
          <Button handleCLick={() => setGender('actresses')} gender={"Actresses"}/>
        </div>
        <div className="row row-cols-3">
          {actors.map(actor =>
            <Card actor={actor} gender={gender} key={actor.id}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
