import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [pokemon, setPokemon] = useState(new Array(15));

  useEffect(() => {
    let addPokemon = new Array(15);
    for (let i = 0; i < 15; i++) {
      let newPokemon = Math.round(Math.random() * 800);
      while(addPokemon.includes(newPokemon)) {
        newPokemon = Math.round(Math.random() * 800);
      }
      console.log(newPokemon);
      addPokemon[i] = newPokemon;
    }
    setPokemon(addPokemon);
  }, []);

  return (
    <>
      <p>Pokemon image</p>
      {pokemon.map((name) => (
        <Card name={name} />
      ))}
    </>
  );
}

export default App;
