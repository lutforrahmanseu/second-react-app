import React from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

import "./Players.css";
const Players = ({ players, card, setCard }) => {
  console.log(players);
  return (
    <div className="card-container">
      {players.map((singlePlayer) => (
        <SinglePlayer
          player={singlePlayer}
          key={singlePlayer.idPlayer}
          card={card}
          setCard={setCard}
        ></SinglePlayer>
      ))}
    </div>
  );
};

export default Players;
