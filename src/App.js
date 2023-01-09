import "./App.css";
import Pokemon from "./Pokemon";
import Pikachu from "./images/pikachu.png";
import Alakazam from "./images/alakazam.jpg";
import useSound from "use-sound";
import Music from "./battle-music.mp3";

import { useState } from "react";
function App() {
  const [pikachuHP, setPikachuHP] = useState(120);
  const [alakazamHP, setAlakazamHP] = useState(100);
  const [play] = useSound(Music);

  const pikachuAttack = () => {
    setAlakazamHP(alakazamHP - 20);
  };

  const alakazamAttack = () => {
    setPikachuHP(pikachuHP - 20);
  };

  const container = document.querySelector(".container");

  if (pikachuHP <= 0) {
    container.innerHTML = "Alakazam Wins";
  }

  if (alakazamHP <= 0) {
    container.innerHTML = "Pikachu Wins";
  }

  return (
    <div className="container">
      <Pokemon
        name="Pikachu"
        img={Pikachu}
        hp={pikachuHP}
        attack={pikachuAttack}
      ></Pokemon>
      <Pokemon
        name="Alakazam"
        img={Alakazam}
        hp={alakazamHP}
        attack={alakazamAttack}
      ></Pokemon>
      <button onClick={play}>Press it first</button>
    </div>
  );
}

export default App;
