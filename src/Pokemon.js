import React from "react";

const Pokemon = ({ name, img, hp, attack }) => {
  return (
    <div className="pokemon-container">
      <div className="pokemon-name">{name}</div>

      <img src={img} alt={name} />
      <div className="hp">HP: {hp}</div>
      <button onClick={attack}>Attack Opponent</button>
    </div>
  );
};

export default Pokemon;
