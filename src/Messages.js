import './Messages.css';
import React, { useEffect, useState } from 'react'
import {db} from "./firebase-config"
import {collection, doc, addDoc, getDocs, updateDoc, deleteDoc, setDoc, arrayUnion, getDoc} from "@firebase/firestore"
import { useParams } from 'react-router-dom'


export default function Messages() {
    const {id} = useParams()
    const [users, setUsers] = useState([])
    const [role, setRole] = useState("")
    const [comment, setComment] = useState(0)
    const [idArray, setIdArray] = useState([])
    const [commentArray, setCommentArray] = useState([])
    const UsersCollectionRef = collection(db, "user")

    const sendMessage = async () => {
        if(comment === 0) {
            
        } else {
            setRole("user")
            // await addDoc(UsersCollectionRef, { role: role, comment: comment })
            // window.location.reload()

            const userDoc = doc(db, "user", id)
            const userContractData = ["user:" + comment, "guest:" + comment]
            await setDoc(userDoc,
                { comment: arrayUnion(...userContractData) }
                , {merge: true});

            // const userDoc = doc(db, "user", id)
            // const addingElement = { 
            //     comment: ["user:" + comment]}
            // await updateDoc(userDoc, addingElement)
            window.location.reload()
        }
    }

    useEffect(() => {
        const getUsersData = async () => {
            const docRef = doc(db, "user", id);
            const docSnap = await getDoc(docRef);
            const disp = docSnap.data().comment
            console.log("what will be displayed", disp)
            setUsers(disp)

        //   const data = await getDocs(UsersCollectionRef)
        //   setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        }
        getUsersData()
    }, [])

    
  return (
    <div className="Message">

        <h1 className=' w-screen text-center mt-8 text-4xl font-bold'>React with FireBase</h1>
        <p className='w-screen text-center mt-5'>Fillin the Details to Upload Data to the DataBase</p>

        <h3 className='text-xl'>
            Chat
        </h3>
        <div className='chat'>
            {users.map((element) => {
                if(element.substr(0, 5) == "user:") {
                    return (
                        <div className='div_user'>
                            <p className='w-auto text-center'>{element.substr(5)}</p>
                        </div>
                    )
                } else {
                    return (
                        <div className='div_guest'>
                            <p className='w-auto text-center'>{element.substr(6)}</p>
                        </div>
                    )
                }
            })}
        </div>
        <div className='div_input'>
            <input className='input' type="text" placeholder='Comment' onChange={(event) => { setComment(event.target.value)}} />
            <button onClick={sendMessage} className='button_input'>Send</button>
        </div>

    </div>
  )
}
