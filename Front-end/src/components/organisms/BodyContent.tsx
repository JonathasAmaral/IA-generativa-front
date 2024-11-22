import React from "react";
import ModulesButtons from "../molecules/ModulesButtons";
import InputWithButton from "../molecules/InputWithButton";
import Button from "../atoms/Button";
import { useAppLogic } from "../../hooks/useAppLogic";

const BodyContent: React.FC = () => {
  const {
    isApiConversation,
    selectedConversation,
    conversationMessages,
    addMessageToConversation,
    startApiConversation,
    setIsApiConversation, // Adicionado aqui
  } = useAppLogic();

  const handleSendMessage = (message: string) => {
    if (!message) return;

    // Adicionar mensagem à conversa selecionada
    addMessageToConversation(selectedConversation, `User: ${message}`);
    startApiConversation();

    // Simular resposta da API
    setTimeout(() => {
      addMessageToConversation(
        selectedConversation,
        "IA: Esta é uma resposta simulada da API."
      );
      setIsApiConversation(false); // Volta ao estado de interação normal
    }, 2000);
  };

  return (
    <div className="body-content">
      {!isApiConversation && (
        <div className="modules">
          <ModulesButtons
            buttons={[ "Module 1","Module 2","Module 3","Module 4","Module 5","Module 6","Module 7","Module 8","Module 9",]}
          />
        </div>
      )}

      <div className="chat">
        <p>Como posso ajudá-lo?</p>
        <InputWithButton
          placeholder="Digite sua pergunta..."
          onSendMessage={handleSendMessage}
        />

        {!isApiConversation && (
          <div className="suggestions">
            {Array(7)
              .fill("qual meu horario")
              .map((text, index) => (
                <Button key={index} text={text} />
              ))}
          </div>
        )}

        <div className="messages">
          {conversationMessages[selectedConversation]?.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
