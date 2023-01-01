import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import "./Home.css";
const Home = () => {
  const [search, setSearch] = useState([]);
  const [players, setPlayers] = useState(" ");
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);

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
          <p>This is card</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
