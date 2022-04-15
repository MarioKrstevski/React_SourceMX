import React, { useState, useEffect } from "react";

import { useToggle } from "../hooks/useToggle";
import { useFetchPokemon } from "../hooks/useFetchPokemon";

function CustomHooks() {
  const { isOn, toggle } = useToggle();

  const { pokemon, refetch, isLoading } = useFetchPokemon();

  return (
    <div onClick={toggle}>
      custom hook {isOn ? "on " : "off"}
      <br />
      {isLoading && <div> Pokemons are loading</div>}
      <div>
        <ul>
          {pokemon.slice(0,5).map((p) => (
            <li key={p.name}> {p.name}</li>
          ))}
        </ul>
      </div>

      <button onClick={refetch}> FETCH AGAIN</button>
    </div>
  );
}

export default CustomHooks;
