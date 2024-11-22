import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface InputWithButtonProps {
  placeholder: string;
  onSendMessage?: (message: string) => void; // Callback para envio de mensagem
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  placeholder,
  onSendMessage,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() === "") return; // Não envia se o campo estiver vazio
    onSendMessage?.(inputValue); // Chama a função passada por prop
    setInputValue(""); // Limpa o input
  };

  return (
    <div className="input-with-button">
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="button" onClick={handleButtonClick}>
        <FaArrowUp className="icon" />
      </button>
    </div>
  );
};

export default InputWithButton;
