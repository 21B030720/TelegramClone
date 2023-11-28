import './List.css';
import React, { useEffect, useState } from 'react'
import {db} from "./firebase-config"

import {collection, doc, addDoc, getDocs, updateDoc, deleteDoc, setDoc, arrayUnion, getDoc} from "@firebase/firestore"

// export const corresponces = [
//     {
//         id: "cGX3B7OzfymjVP3XIxhN",
//         title: "Arslan",
//         messages: ["Hello", "how are you"]
//     },
//     {
//         id: "a1YZqJCR3FbKXCCk1YSd",
//         title: "Boris",
//         messages: ["Hello", "how are you", "I am hungry"]
//     },
//     {
//         id: "OT3L7l0cwzA0Ks98ErCE",
//         title: "Arman",
//         messages: ["How is React", "Do you listen to me?"]
//     },
// ]

export default function List() {
    const [users, setUsers] = useState([])
    const UsersCollectionRef = collection(db, "roomList")

    const getDataFromFirebase = async() => {
        // setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        const data = await getDocs(UsersCollectionRef)
        setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        console.log(users)

        
    }
    
    useEffect(() => {
        const getUsersData = async () => {
            const data = await getDocs(UsersCollectionRef)
            setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
            
        }
        getUsersData()

    }, [users])

    const click = (path) => {
        window.location.href = path;
    }
    const check = () => {

    }
  return (
    
    <div>
        {/* <button onClick={getDataFromFirebase}></button> */}
        {
            
            users.map(user => {
                return(

                    <div className='list_element' onClick={() => click('http://localhost:3000/' + String(user.id))}>
                        {user.name}
                    </div>
                )
                
            })
            // corresponces.map(({id, title, messages}) => {
            //     return(
            //         <div className='list_element' onClick={() => click('http://localhost:3000/' + id)}>
            //             {title}
            //         </div>
            //     );
            // })
        }
    </div>
  )
}
