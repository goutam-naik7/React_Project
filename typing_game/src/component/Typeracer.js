import React from "react";
import Button from "./Button";

const Typeracer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handleInput,
    handleStart,
  } = props;
  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div className="time">
        <p style={{ animation: animation !== null ? animation : "" }}>{time}</p>
      </div>
      <div className="wordValues">
        <input
          disabled={disabled && disabled}
          onKeyPress={(e) => handleInput(e)}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start Typing"}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};

export default Typeracer;
