import React from "react";
import Axios from "axios";

const PlayerSingle = (props) => {
  const removePlayer = (event) => {
    event.preventDefault();

    Axios.delete(`http://localhost:4000/player/${props.player._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="soccer.jpeg" alt="Soccer player" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {props.player.phone} - Email: {props.player.email}
            </p>
            <p>
              Strength: {props.player.strength} - Endurance:{" "}
              {props.player.endurance}
            </p>
          </div>
          <div className="card-action">Team: {props.player.team}</div>
        </div>
        <div className="buttons">
          <button
            className="btn waves-effect waves-light red darken-4"
            onClick={removePlayer}
          >
            Remove player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
