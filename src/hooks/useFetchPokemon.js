import { useEffect, useState } from "react";

export function useFetchPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [i, setI] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(
      function () {
        const POKEAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
        async function getPokemons() {
          try {
            setIsLoading(true);
            let dataStream = await fetch(POKEAPI);
            let json = await dataStream.json();
            setPokemon(json.results);
            setIsLoading(false);
          } catch (e) {
            setIsLoading(false);
          }
        }
        getPokemons();
      },
      [i]
    );
  
    function refetch() {
      setI(i + 1);
    }
  
    return { pokemon, refetch, isLoading };
  }