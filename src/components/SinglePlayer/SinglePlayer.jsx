import React from "react";
import "./SinglePlayer.css";
const SinglePlayer = ({ player, card, setCard }) => {
  const { strPlayer, idPlayer, strCutout, strThumb, strNationality } = player;
  const handleClick = () => {
    const details = {
      strPlayer,
      idPlayer,
      strCutout,
      price: 150,
    };
    const newCard = [details];
    setCard(newCard);
  };
  console.log(card);
  return (
    <div className="card">
      <img src={strThumb} className="player-img" alt="Not Fount" />
      <h2>{strPlayer}</h2>
      <p>{strNationality}</p>
      <button onClick={() => handleClick()} className="card-btn">
        Details
      </button>
      <button className="card-btn">Add To Card</button>
      <button className="card-btn">Bookmark</button>
    </div>
  );
};

export default SinglePlayer;
