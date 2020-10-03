import React from 'react'
import './SenderChat.css'

const SenderChat = (props) => {
    return (
        <div className="mt-5 mb-5" key={props.uid}>
            {/* <h5 className="section__text d-flex justify-content-end">{props.user}</h5> */}
            <div className="d-flex justify-content-end">
                <div className="chat-msg-sender">
                    <p>{props.message}</p>
                </div>
                <img src="https://i.imgur.com/Yxje2El.jpg" className="chat-pic-img-sender"/>
            </div>
            <time className="text-dark d-flex justify-content-end"  style={{marginLeft: "70px"}} >{props.date}</time>
        </div>
        
    )
}

export default SenderChat
