
import './App.css';
import {useEffect, useState} from 'react'
import { getAllConversations } from './api/messenger';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import List from './List';
import Messages from './Messages';
import FirebaseMessages from './FirebaseMessages';


function Home() {
  return (
    <>
      <div class="tabBar">

      </div>
      <div class="lenta">
        <List />
      </div>
    </>
  );
  }
  


function App() {
  const [conversationData, setConversationData] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await getAllConversations();
      setConversationData(data);
      console.log(conversationData);
    }
    fetchData();
  }, []) 
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Messages />} />
          <Route path="/firebase" element={<FirebaseMessages />} />
          {/* <Route path="/help" element={<Help />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
