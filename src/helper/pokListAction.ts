import { Dispatch } from "react";
import { PokemonActionType } from "../types/PokmonActionType";
import axios, { AxiosError } from "axios";

export const listPokemons = async (url:string,dispatch:Dispatch<any>)=>{
    dispatch({
        type:PokemonActionType.POKEMON_LIST_REQUEST
    });
    try {
        const  {data} = await axios.get(url);
        dispatch({
            type:PokemonActionType.POKEMON_LIST_SUCCESS,
            payload:data
        });
    } catch (error:unknown) {
        let message:string;
      if(error instanceof AxiosError ){
        message=error.message;
      }else{
        message="unexpected error"
      }
        dispatch({
            type: PokemonActionType.POKEMON_LISTT_FAIL,
            payload: message
        });
    }
}

export const detailsPokemon= async (pokemonName:string,dispatch:Dispatch<any>)=>{
  dispatch({
      type:PokemonActionType.POKEMON_DETAILS_REQUEST,
      payload:pokemonName  
  });
  try {
   const {data}= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)  ;
   dispatch({type:PokemonActionType.POKEMON_DETAILS_SUCCESS,payload:data}) 
  } catch (error) {
    let message:string;
    if(error instanceof AxiosError ){
      message=error.message;
    }else{
      message="unexpected error"
    }
    dispatch({type:PokemonActionType.POKEMON_DETAILS_FAIL,
      payload:message});
      
  }
}