import React, { useState } from 'react'
import { Pokemons } from '../types/PokmonActionType'
import PokemonList from '../container/PokemonList'
import "./pokemon.css"
import { useSelector } from 'react-redux'
import { RootState } from '../reducer'
import { couldStartTrivia } from 'typescript'
import Loader from './loader/Loader'
interface Props  {
    pokemons:Pokemons[]
}

const PokemonCollection = ({pokemons}: Props) => {
  const [openPopUp,setOpenPopUp]=useState(false);

  const pokemanDetail=useSelector((state:RootState)=>state.pokemanDetail);

  const {loading,Pokemon}=pokemanDetail;


  return (
    <>
    <section className="collection-container">
      {pokemons.map((pokemon,index) => {
        return (
          <PokemonList
            key={index}
            name={pokemon.name}
            url={pokemon.url}
            setOpenPopUp={setOpenPopUp}
          />
        )
      })}
    </section>
 { openPopUp &&  <div className="pop_up_container"  onClick={()=>setOpenPopUp(!openPopUp)}>
      <div className="pop_up_body" onClick={(e)=>e.stopPropagation()}>
        <div className="pop_up_header">
          <button onClick={()=>setOpenPopUp(!openPopUp)}>x</button>
        </div>
        <div className="pop_up_content">
        {loading && <Loader />}
       { Pokemon && <section className={`pokemon-list-container ${Pokemon?.types[0]?.type.name} `}>
        <p className="pokemon-name"> # {Pokemon?.id} </p>
        <p className="pokemon-name"> {Pokemon?.name} </p>
        <img src={Pokemon?.sprites?.front_default} alt={Pokemon?.name} />
        <p className="pokemon-name"> Type : {Pokemon?.types[0]?.type.name} </p>
      </section>} 
        
          </div>
      </div>
    </div>
}
  </>
  )
}

export default PokemonCollection;