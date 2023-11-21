import './List.css';
import React from 'react'

export const corresponces = [
    {
        id: "cGX3B7OzfymjVP3XIxhN",
        title: "Arslan",
        messages: ["Hello", "how are you"]
    },
    {
        id: "a1YZqJCR3FbKXCCk1YSd",
        title: "Boris",
        messages: ["Hello", "how are you", "I am hungry"]
    },
    {
        id: "OT3L7l0cwzA0Ks98ErCE",
        title: "Arman",
        messages: ["How is React", "Do you listen to me?"]
    },
]

export default function List() {
    const click = (path) => {
        window.location.href = path;
    }
  return (
    <div>
        {
            corresponces.map(({id, title, messages}) => {
                return(
                    <div className='list_element' onClick={() => click('http://localhost:3000/' + id)}>
                        {title}
                    </div>
                );
            })
        }
    </div>
  )
}
