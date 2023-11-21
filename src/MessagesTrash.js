// import React, { useEffect, useState } from 'react'
// import {db} from "./firebase-config"
// import {collection, doc, addDoc, getDocs, updateDoc, deleteDoc} from "@firebase/firestore"
// import { useParams } from 'react-router-dom'

// export default function Messages() {
//     const {id} = useParams()
//     const [users, setUsers] = useState([])
//     const [role, setRole] = useState("")
//     const [comment, setComment] = useState(0)
//     const [idArray, setIdArray] = useState([])
//     const [commentArray, setCommentArray] = useState([])
//     const UsersCollectionRef = collection(db, "user")

//     const sendMessage = async () => {
//         setRole("user")
//         await addDoc(UsersCollectionRef, { role: role, comment: comment })
//         window.location.reload()
//     }

//     useEffect(() => {
//         const getUsersData = async () => {
//           const data = await getDocs(UsersCollectionRef)
//           setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
//         }
//         getUsersData()
//     }, [])

//     const sendMessage2 = async (id) => {
//         await setIDs
//         const data = await getDocs(UsersCollectionRef)
//         const userDoc = doc(db, "user", idArray[id])
//         console.log("ars1", commentArray[id])
//         // const NewComment = {comment: commentArray[id] + [comment]}

//         // await updateDoc(userDoc, NewComment)
//         // console.log("Updated the Data on the Server")
//         window.location.reload()
//     }
//     const setIDs = async () => {
//         const data = await getDocs(UsersCollectionRef)
//         const res = data.docs.map((elem) => ({ ...elem.data(), id: elem.id }))
//         res.mape((user) => {
//             setIdArray(current => [...current, user.id]);
//             setCommentArray(current => [...current, user.comment]);
//         })
//     }

//       const deleteUser = async (id) => {
//         const userDoc = doc(db, "user", id)
//         console.log("Got the Document ID")
//         await deleteDoc(userDoc)
//         console.log("Deleted the Document")
//         window.location.reload()
//     }
//   return (
//     <div className="text-white mt-20 mx-6">

//         <h1 className=' w-screen text-center mt-8 text-4xl font-bold'>React with FireBase</h1>
//         <p className='w-screen text-center mt-5'>Fillin the Details to Upload Data to the DataBase</p>
//         {/* <div className='text-center mt-16'>
//             <span>Enter your Name : </span>
//             <input className='mx-4 text-black' type="text" placeholder='Name' onChange={(event) => { setName(event.target.value)}} />
//             <span>Enter your Age : </span>
//             <input className='mx-4 text-black' type="text" placeholder='Age' onChange={(event) => { setAge(event.target.value) }} />
//             <br />
//             <button onClick={CreateUser} className='bg-slate-700 m-4 p-2 w-20 rounded-md'>Upload</button>
//         </div> */}

//         <h3 className='text-xl'>
//         Users:
//         </h3>
//         <div className='grid grid-cols-2'>
//             {users.map(user => {
//                 return <div className='hover:animate-pulse m-4 bg-gray-600 w-1/4 rounded-md p-2'>
//                 <p className='w-auto text-center'>{user.comment}</p>
//                 {/* <p className='w-auto text-center'>{user.age}</p> */}
//                 {/* <button onClick={() => { increaseAge(user.id, user.age) }}>Increase Age</button>
//                 <button onClick={() => { deleteUser(user.id) }}>Delete User</button> */}
//             </div>
//             })}
//         </div>
//             <input className='mx-4 text-black' type="text" placeholder='Comment' onChange={(event) => { setComment(event.target.value)}} />
//             <button onClick={sendMessage} className='bg-slate-700 m-4 p-2 w-20 rounded-md'>Send</button>
//             {/* <button onClick={() => {sendMessage2(id)}} className='bg-slate-700 m-4 p-2 w-20 rounded-md'>Send2</button> */}
//             {/* <button onClick={getIDs} className='bg-slate-700 m-4 p-2 w-20 rounded-md'>Send3</button> */}
//         <div>

//         </div>

//     </div>
//   )
// }
