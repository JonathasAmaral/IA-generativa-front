// src/components/organisms/Sidebar.tsx
import React from "react";
import Button from "../atoms/Button";

interface SidebarProps {
  conversations: string[];
  onNewConversation: () => void;
  onSelectConversation: (conversation: string) => void;
  selectedConversation: string; // Para destacar a conversa selecionada
}

const Sidebar: React.FC<SidebarProps> = ({ 
  conversations, 
  onNewConversation, 
  onSelectConversation, 
  selectedConversation 
}) => {
  return (
    <div className="sidebar">
      <Button text="New Conversation" onClick={onNewConversation} />
      <div className="conversations">
        {conversations.map((conversation, index) => (
          <button
            key={index}
            className={`conversation-button ${selectedConversation === conversation ? "selected" : ""}`}
            onClick={() => onSelectConversation(conversation)}
          >
            {conversation}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
