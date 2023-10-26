import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PokemonList from './PokemonList';
import { RootState } from '../reducer';
import { PokemonActionType } from '../types/PokmonActionType';





describe('PokemonList Component', () => {
 

  test('renders Pokemon details correctly', () => {

    const initialState: RootState = {
      pokemanList: {
        pokemons:[],
        nextUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
        loading:false,
        error:false,
        errorMessage:"",
    },
      pokemanDetail: {
        Pokemon:null,
        loading:false,
        error:false,
        errorMessage:"",
    }
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    store.clearActions();

    const props = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
      setOpenPopUp: jest.fn(),
    };

    const { getByText } = render(
      <Provider store={store}>
        <PokemonList {...props} />
      </Provider>
    );

    expect(getByText(/# 25/i)).toBeInTheDocument();
    expect(getByText(/Pikachu/i)).toBeInTheDocument();
  });

  test('dispatches detailsPokemon action when showDetails is called', () => {
   
    const initialState: RootState = {
      pokemanList: {
        pokemons:[],
        nextUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
        loading:false,
        error:false,
        errorMessage:"",
    },
      pokemanDetail: {
        Pokemon:null,
        loading:false,
        error:false,
        errorMessage:"",
    }
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);

   
    const props = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
      setOpenPopUp: jest.fn(),
    };

    const { getByText } = render(
      <Provider store={store}>
        <PokemonList {...props} />
      </Provider>
    );

    fireEvent.click(getByText(/Pikachu/i));

    const actions = store.getActions();
    expect(actions).toEqual([{ type: PokemonActionType.POKEMON_DETAILS_REQUEST, payload: 'Pikachu' }]);
  });

  test('sets openPopUp to true when showDetails is called', () => {
    const initialState: RootState = {
      pokemanList: {
        pokemons:[],
        nextUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
        loading:false,
        error:false,
        errorMessage:"",
    },
      pokemanDetail: {
        Pokemon:null,
        loading:false,
        error:false,
        errorMessage:"",
    }
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const props = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
      setOpenPopUp: jest.fn(),
    };

    const { getByText } = render(
      <Provider store={store}>
        <PokemonList {...props} />
      </Provider>
    );

    fireEvent.click(getByText(/Pikachu/i));

    expect(props.setOpenPopUp).toHaveBeenCalledWith(true);
  });
});
