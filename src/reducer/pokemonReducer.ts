import { Pokemon, PokemonActionType, PokemonDetailsAction, PokemonLISTAction, Pokemons } from "../types/PokmonActionType";


  export interface PokListState{
    pokemons:Pokemons[];
    nextUrl:string;
    loading:boolean;
    error:boolean;
    errorMessage:string;

  }
  const initState:PokListState={
    pokemons:[],
    nextUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
    loading:false,
    error:false,
    errorMessage:"",
}

export const pokListReducer=(state=initState,action:PokemonLISTAction):PokListState=>{
    switch (action.type){
        case PokemonActionType.POKEMON_LIST_REQUEST:
            return { ...state,loading:true};
            case PokemonActionType.POKEMON_LIST_SUCCESS:
            //aura lieu dans redux store
            const newPokemons =action.payload &&
            action.payload.results &&
            Array.isArray(action.payload.results) &&
            action.payload.results.length > 0 
              ? [...action.payload.results]
              : [];

            return  { ...state,loading:false,
              pokemons:[...state.pokemons,...newPokemons],
              nextUrl:action.payload.next};
                   
             case PokemonActionType.POKEMON_LISTT_FAIL:
               //aura lieu dans redux store
               return {...state, error:true,loading:false,errorMessage: action.payload};
        
       default:
           return state;
    }
   }
///details pok
   export interface PoKDetailState{
    Pokemon:Pokemon |null;
    loading:boolean;
    error:boolean;
    errorMessage:string;

  }
  const initDatialState:PoKDetailState={
    Pokemon:null,
    loading:false,
    error:false,
    errorMessage:"",
}

export const pokDetailsReducer=(state=initDatialState,action:PokemonDetailsAction):PoKDetailState=>{
    switch (action.type){
        case PokemonActionType.POKEMON_DETAILS_REQUEST:
            return { ...state,loading:true};
        case PokemonActionType.POKEMON_DETAILS_SUCCESS:
            return  { ...state,loading:false, Pokemon:action.payload};
                   
             case PokemonActionType.POKEMON_DETAILS_FAIL:
               //aura lieu dans redux store
               return {...state, error:true,loading:false,errorMessage: action.payload};
        
       default:
           return state;
    }
   }

   