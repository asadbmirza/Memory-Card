import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [pokemon, setPokemon] = useState(new Array(15));
  const [shuffle, setShuffle] = useState(false);
  const [reset, setReset] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) setHighScore(score);

  useEffect(() => {
    let addPokemon = new Array(15);
    let keys = new Array(15);

    for (let i = 0; i < 15; i++) {
      let newPokemon = Math.round(Math.random() * 800);
      while (addPokemon.includes(newPokemon)) {
        newPokemon = Math.round(Math.random() * 800);
      }
      addPokemon[i] = newPokemon;
      keys[i] = Math.random();
    }
    setPokemon(
      addPokemon.map((name, index) => (
        <Card
          key={keys[index]}
          name={name}
          setShuffle={setShuffle}
          setReset={setReset}
          isClicked={false}
        />
      ))
    );
    setScore(0);
    if (reset == true) alert("Try Again!");
    setReset(false);
  }, [reset]);


  

  if (shuffle == true) {
    let array = pokemon.slice();

    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    if (reset != true) {
      setScore(score + 1);
    }
  
    setShuffle(false);
    setPokemon(array);
  }



  return (
    <>
      <h1>Pokemon Memory Game!</h1>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      {score < 15 ? <div className="cards">{pokemon}</div> : <h1>You win!</h1>}
    </>
  );
}

export default App;
