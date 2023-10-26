export enum PokemonActionType {
    POKEMON_LIST_REQUEST="POKEMON_LIST_REQUEST",
    POKEMON_LIST_SUCCESS="POKEMON_LIST_SUCCESS",
    POKEMON_LISTT_FAIL="POKEMON_LISTT_FAIL",
    POKEMON_DETAILS_REQUEST="POKEMON_DETAILS_REQUEST",
    POKEMON_DETAILS_SUCCESS="POKEMON_DETAILS_SUCCESS",
    POKEMON_DETAILS_FAIL="POKEMON_DETAILS_FAIL"
  }


  export interface Pokemons {
    name: string
    url: string
  }
  export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: {
      type : {
        name: string
      }
    }[]
  }


  export interface PokemonListRequestAction{
    type:PokemonActionType.POKEMON_LIST_REQUEST;
  }

  export interface PokemonListSuccesAction{
    type:PokemonActionType.POKEMON_LIST_SUCCESS;
    payload:PokemonListResponse;
  }

  export interface PokemonListFailAction{
    type:PokemonActionType.POKEMON_LISTT_FAIL;
    payload:string;
  }
  
  type PokemonListResponse = {
    count: number;
    next: string;
    previous: string;
    results: {
      name: string;
      url: string;
    }[];
  };



export type PokemonLISTAction=PokemonListRequestAction|PokemonListSuccesAction|PokemonListFailAction;


export interface PokemonDetailsRequestAction{
  type:PokemonActionType.POKEMON_DETAILS_REQUEST;
  payload:string;
}

export interface PokemonDetailsSuccesAction{
  type:PokemonActionType.POKEMON_DETAILS_SUCCESS;
  payload:Pokemon;
}

export interface PokemonDetailsFailAction{
  type:PokemonActionType.POKEMON_DETAILS_FAIL;
  payload:string;
}

export type PokemonDetailsAction=PokemonDetailsRequestAction|PokemonDetailsSuccesAction|PokemonDetailsFailAction;
