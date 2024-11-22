import React from "react";
import Sidebar from "../organisms/Sidebar";
import BodyContent from "../organisms/BodyContent";

interface MainTemplateProps {
  conversations: string[];
  onNewConversation: () => void;
  onSelectConversation: (conversation: string) => void;
  selectedConversation: string;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ 
  conversations, 
  onNewConversation, 
  onSelectConversation, 
  selectedConversation 
}) => {
  return (
    <div className="main-template">
      <Sidebar
      conversations={conversations}
      onNewConversation={onNewConversation}
      onSelectConversation={onSelectConversation}
      selectedConversation={selectedConversation}
      />

      <BodyContent />
    </div>
  );
};

export default MainTemplate;
