import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";
import Swal from "sweetalert2";
const Home = () => {
  const [search, setSearch] = useState([]);
  const [players, setPlayers] = useState();
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
  const handleDelete = (id) => {
    const cardRemove = card.filter((cd) => cd.idPlayer !== id);
    setCard(cardRemove);
    Swal.fire("success");
  };
  return (
    <div className="home-container">
      <div className="left-side">
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          className="search-input"
        />
        <button className="btn-button">Search</button>
        <div className="players-container">
          <Players players={players} card={card} setCard={setCard}></Players>
        </div>
      </div>
      <div className="right-side">
        <div className="card-home">
          <h2>This is Card</h2>
          {card?.map((cards) => (
            <div className="info-card-container">
              <h3>{cards.strPlayer}</h3>
              <button
                onClick={() => handleDelete(cards.idPlayer)}
                className="btn-info-button"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
