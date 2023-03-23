import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Search from './components/Search.js';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const [image, setImages] = useState("");
  console.log(image);
  
  function handleSearchSubmit(e){
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
    .then((res) => res.json())
    .then((data)=> {
      setImages([data, ... image]);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  console.log(process.env);
  return (
    <div className='App'>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );

}

export default App;
