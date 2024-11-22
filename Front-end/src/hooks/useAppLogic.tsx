import { useState } from "react";

export const useAppLogic = () => {
  const [conversations, setConversations] = useState<string[]>([
    "Conversation 1",
    "Conversation 2",
  ]);
  const [selectedConversation, setSelectedConversation] = useState("Conversation 1");
  const [conversationMessages, setConversationMessages] = useState<{
    [key: string]: string[];
  }>({
    "Conversation 1": [],
    "Conversation 2": [],
  });

  const [selectedModule, setSelectedModule] = useState<string | null>(null); // Controla o módulo selecionado
  const [isApiConversation, setIsApiConversation] = useState(false);

  const handleNewConversation = () => {
    const newConversation = `Conversation ${conversations.length + 1}`;
    setConversations((prevConversations) => [...prevConversations, newConversation]);
    setSelectedConversation(newConversation);
    setConversationMessages((prevMessages) => ({
      ...prevMessages,
      [newConversation]: [],
    }));
    setIsApiConversation(false);
    setSelectedModule(null); // Reseta o módulo selecionado ao criar nova conversa
  };

  const handleSelectConversation = (conversation: string) => {
    setSelectedConversation(conversation);
  };

  const addMessageToConversation = (conversation: string, message: string) => {
    setConversationMessages((prevMessages) => ({
      ...prevMessages,
      [conversation]: [...(prevMessages[conversation] || []), message],
    }));
  };

  const startApiConversation = () => {
    setIsApiConversation(true);
  };

  return {
    conversations,
    selectedConversation,
    conversationMessages,
    isApiConversation,
    selectedModule,
    setSelectedModule,
    handleNewConversation,
    handleSelectConversation,
    addMessageToConversation,
    startApiConversation,
    setIsApiConversation,
  };
};
