
import './App.css';
import {useEffect, useRef, useState} from 'react'
import { getAllConversations } from './api/messenger';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import List from './List';
import Messages from './Messages';
import FirebaseMessages from './FirebaseMessages';
import {db} from "./firebase-config"
import {collection, doc, addDoc, getDocs, updateDoc, deleteDoc, setDoc, arrayUnion, getDoc} from "@firebase/firestore"


function Home() {
  const [roomName, setRoomName] = useState()
  const UsersCollectionRef = collection(db, "roomList")

  const addRoom = async () => {
    const id = await addDoc(UsersCollectionRef, { name: roomName, id: null})
    console.log("NEW ROOM ID", id.id)
    const userDoc = doc(db, "roomList", id.id)
    await updateDoc(userDoc, {id: id.id})

    await setDoc(doc(db, "user", id.id), {
      comment: ["user:hello"],
      name: roomName
    })


    // await addDoc(UsersCollectionRef, { role: role, comment: comment })
    // window.location.reload()

    // const {id} = await addDoc(UsersCollectionRef, { Name: "ars" })
    // console.log("NEW ID", id)
    // window.location.reload()

    // const userDoc = doc(db, "user", id)
    // const userContractData = ["user:" + comment, "guest:" + comment]
    // await setDoc(userDoc,
    //     { comment: arrayUnion(...userContractData) }
    //     , {merge: true});

    // const userDoc2 = doc(db, "user", id.id)
    // const addingElement = { 
    //     comment: ["user:hello"]}
    // await updateDoc(userDoc2, addingElement)
  }
  return (
    <>
      <div class="tabBar">
        <input className='room_input' onChange={(event) => { setRoomName(event.target.value)}}></input>
        <button className='room_button' onClick={addRoom}>Create</button>
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
      // const data = await getAllConversations();
      // setConversationData(data);
      // console.log(conversationData);
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
