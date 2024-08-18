import { useState, useEffect } from "react";
import "./card.css";

function Card({ name }) {
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [loaded, setLoaded] = useState(false);
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

  console.log(pokemonImg);

  return (
    <>
      {loaded && (
        <div className="card">
          <h2>{pokemonName}</h2>
          <img src={pokemonImg} alt="" />
        </div>
      )}
    </>
  );
}

export default Card;
