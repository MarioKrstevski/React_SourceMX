import React, { useState, useEffect } from "react";

function Effect() {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState("Mario");
  // side-effects

  // updateNameWhenCounterIs5
  setTimeout(()=>{}, 1000)
  useEffect(
    function () {
      if (counter === 5) {
        setName("Stefan");
      }

      //   let timoutRef = setTimeout(() => {}, 1000);
      // .subscribe()
      return () => {
        // console.log("hi from effect dismount");
        // .unsubscribe()
        // clearTimeout(timoutRef);
      };
    },
    [counter]
    // [5, 0]
    // [5, 1]
  );

  useEffect(
    function () {
      if (counter % 5 === 0) {
        async function fetchPokemons() {
          try {
            let pokemonsStream = await fetch(
              "https://pokeapi.co/api/v2/pokemon"
            );
            let pokemonsJSON = await pokemonsStream.json();
            console.log("again");
            setPokemons(pokemonsJSON.results);
          } catch {}
        }
        fetchPokemons();
      }

      return ()=>{
       
      }
    },
    [counter]
  );

  function increment() {
    setCounter(counter + 1);
  }
  // [] ->  on mount, on dismount

  return (
    <div>
      <div>effect</div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <div>{name}</div>
      <button onClick={increment}>Current count {counter} </button>
    </div>
  );
}

function EffectTest() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        mount/dismount
      </button>{" "}
      {isOn ? <Effect /> : null}
    </div>
  );
}

export default EffectTest;
