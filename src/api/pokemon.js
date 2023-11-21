import axios from "axios";

const URL = `https://pokeapi.co/api/v2/pokemon?limit=151`;
const URL2 = 'https://pokeapi.co/api/v2/pokemon?limit=14&offset=200'
const URL3 = 'https://pokeapi.co/api/v2/pokemon?limit=14&offset=250'
const URL4 = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=2'

export const getAllPokemonList = async() => {
    const {data} = await axios.get(URL4);
    return data;
}