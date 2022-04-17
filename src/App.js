import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        projectID = "522b9601-b85a-4ba6-a622-d7c95b775022"
        userName = "Witchie"
        userSecret = "qwertyuiop"
        renderChatFeed ={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amanzonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
