import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Input.css";

export default function Input({ onSendMessage }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus
        />
        <button className="sendBtn" type="input">
          Send
        </button>{" "}
      </form>
    </div>
  );
}
