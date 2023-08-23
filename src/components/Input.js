import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./Alert";
import "./ComponentsStyle.css";

export default function Input({ onSendMessage }) {
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setShowAlert(true);
    } else {
      onSendMessage(text);
      setText("");
      setShowAlert(false);
    }
  };

  return (
    <div className="input positionInput">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus
        />
        <button className="sendBtn">
          <i
            class="fa-regular fa-envelope fa-lg
          "
          ></i>
        </button>{" "}
        {showAlert && (
          <div>
            <Alert />
          </div>
        )}
      </form>
    </div>
  );
}
