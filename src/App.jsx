import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    console.log("useEffect is happening");
    fetchData()
  }, []);
  
  function fetchData() {
    axios .get("https://lanciweb.github.io/demo/api/actresses/")
    .then((resp) => {
      console.log("fetchData is happening");
      setActresses(resp.data);
      console.log(resp.data);
      
    })
  }

  return (
    <>
    <h1>prova</h1>
    </>
  )
}

export default App
