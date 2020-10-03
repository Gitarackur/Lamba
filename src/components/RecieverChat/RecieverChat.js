import React from 'react'
import './RecieverChat.css'

const RecieverChat = (props) => {
    return (
        <div className="mt-5 mb-5" key={props.uid}>
            <h5 className="section__text d-flex justify-content-start">{props.user}</h5>
            <div className="d-flex ">
                <img src="https://i.imgur.com/Yxje2El.jpg" className="chat-pic-img"/>

                <div className="chat-msg">
                    <p>{props.message}</p>
                </div>
            </div>
            <time className=""  style={{marginLeft: "70px"}}>{props.date}</time>
        </div>
    )
}

export default RecieverChat
