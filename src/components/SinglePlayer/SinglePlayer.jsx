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
    console.log(details);
    if (card) {
      const newCard = [...card, details];
      setCard(newCard);
    }
  };
  const handleBookMark = () => {
    const bookMarkDetails = {
      strPlayer,
      idPlayer,
      strCutout,
      quantity: 1,
      bookMark: "true",
    };
    const prevBookMark = localStorage.getItem("bookMark");
    const oldBookMark = JSON.parse(prevBookMark);
    if (oldBookMark) {
      const isExist = oldBookMark.find((p) => p.idPlayer === idPlayer);
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
        localStorage.setItem("bookMark", JSON.stringify(oldBookMark));
        console.log(isExist);
        return;
      } else {
        localStorage.setItem(
          "bookMark",
          JSON.stringify([...oldBookMark, bookMarkDetails])
        );
      }
      console.log("ache");
    } else {
      localStorage.setItem("bookMark", JSON.stringify([bookMarkDetails]));
      console.log("nai");
    }
  };
  return (
    <div className="card " data-aos="flip-up">
      <img src={strThumb} className="player-img" alt="Not Fount" />
      <h2>{strPlayer}</h2>
      <p>{strNationality}</p>
      <button className="card-btn">Details</button>
      <button onClick={() => handleClick()} className="card-btn">
        Add To Card
      </button>
      <button onClick={() => handleBookMark()} className="card-btn">
        Bookmark
      </button>
    </div>
  );
};

export default SinglePlayer;
