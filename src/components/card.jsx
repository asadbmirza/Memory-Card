import { useState, useEffect } from "react";
import "./card.css";

function Card({ name , setShuffle, setReset, isClicked}) {
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(isClicked);

  useEffect(() => {
    async function pokemon(monster) {
      try {
        const getPokemon = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + monster
        );
        const pokemonFormatted = await getPokemon.json();
        setPokemonImg(pokemonFormatted["sprites"]["front_default"]);
        setPokemonName(pokemonFormatted["species"]["name"]);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    pokemon(name);
  }, []);

  

  function handleClick(e)  {
    if (clicked == true) {
        setClicked(false);
        setReset(true);
    }
    else {
        setClicked(true);
        
    }
    setShuffle(true);
    
  }

  

  return (
    <>
      {loaded && (
        <div className="card" onClick={handleClick}>
          <h2>{pokemonName}</h2>
          <img src={pokemonImg} alt="" />
        </div>
      )}
    </>
  );
}

export default Card;
