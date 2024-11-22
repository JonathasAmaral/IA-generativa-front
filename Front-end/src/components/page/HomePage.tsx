import Header from '../templates/Header'; 
import MainTemplate from '../templates/MainTemplate'; 
import { useAppLogic } from '../../hooks/useAppLogic'; 

function HomePage() {
    // Lógica do App compartilhada
    const {
      conversations,
      selectedConversation,
      handleNewConversation,
      handleSelectConversation,
    } = useAppLogic();
  
    return (
      <div className="home-page">

        <Header />

        <MainTemplate
          conversations={conversations}
          onNewConversation={handleNewConversation}
          onSelectConversation={handleSelectConversation}
          selectedConversation={selectedConversation}
        />
      </div>
    );
  };
  
  export default HomePage;
