import React from "react";
import "nes.css/css/nes.min.css";

function RoomInfo(props) {
  return (
    <div className="room-info-wrapper">
      <div className="nes-container is-rounded">
        {!!props.messages.length && (
          <div>
            <span>Messages</span>
            <ul className="nes-list">
              {props.messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        )}
        <p>Cooldown: {props.cooldown}</p>
        <p>Exits: {props.exits.join(" ,")}</p>
        {!!props.items.length && <p>Items: {props.items.join(",")}</p>}
      </div>
    </div>
  );
}

export default RoomInfo;
