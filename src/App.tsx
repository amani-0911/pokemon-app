import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import "./App.css"
import { RootState } from './reducer';
import { listPokemons } from './helper/pokListAction';
import PokemonCollection from './components/PokemonCollection';
import Loader from './components/loader/Loader';

function App() {

  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  const [openPopUp,setOpenPopUp]=useState(false);

  const pokemanList=useSelector((state:RootState)=>state.pokemanList);

  const {loading,error,pokemons, errorMessage, nextUrl}=pokemanList;
  const dispatch=useDispatch();

//useCallback to fetchdate only if breedSatate is change
const fetchData=useCallback(async()=>{
  listPokemons(url,dispatch) 
},[url])

//if fectData was change render the componenet
useEffect(()=>{
  fetchData(); 
},[fetchData,url])

const handleScroll = async () => {
  if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
  ) {
      setUrl(nextUrl);
  }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [handleScroll]);



  return (
    <div className="App">
    <div className="container">
      <header className="pokemon-header"> Pokemon</header>
      <PokemonCollection pokemons={pokemons} />
      {loading && <Loader />}
    </div>
  </div>
  );
}

export default App;
