import React, { useState } from "react";
import Button from "../atoms/Button";

interface CardProps {
  buttons: string[];
}

const ModulesButtons: React.FC<CardProps> = ({ buttons }) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div className="modulesButton">
      {buttons.map((text, index) => (
        <div
          key={index}
          className={`button-wrapper ${selectedButton === index ? "selected" : ""}`}
          onClick={() => handleButtonClick(index)}
        >
          <Button text={text} />
        </div>
      ))}
    </div>
  );
};

export default ModulesButtons;
