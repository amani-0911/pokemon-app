import axios from "./axios";

// Fetch All of the pokemon Data first page
export const fetchFirstPokemonsPage = async () => {
  try {
    const response = await axios.get("/pokemon?limit=20&offset=20");
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err, "error message");
    } else {
      console.log("unexpected error: ", err);
    }
  }
};

// Fetch The Pokemon data
export const fetchPokemonData = async (name: string) => {
  try {
    const response = await axios.get(`/pokemon/${name}`);
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err, "error message");
    } else {
      console.log("unexpected error: ", err);
    }
  }
};

