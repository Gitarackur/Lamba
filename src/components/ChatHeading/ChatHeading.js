import React from 'react'
import {Route, Link, Redirect} from 'react-router-dom';
import './ChatHeading.css'
import fire from '../../config/firebaseConfig'

const ChatHeading = (props) => {

    return (
        <div className="chatter-name pl-3 pt-5">
            {/* <p className="p-2">Welcome {props.userDetails.displayName}{props.userDetails.email} to Lamba</p> */}
            <div className="container d-flex">
                <div className="pic">
                    <img src="https://i.imgur.com/Yxje2El.jpg" className=""/>
                </div>
                <div className="headd">
                    <h5 className="section__text">{props.userDetails.email}</h5>
                    <div>
                        <i></i><p>Online</p>
                    </div>
                    
                </div>
            </div> 

            <div className="">
                <button className="btn btn-warning btn-sm text-white" onClick={props.SignOut}>Logout</button>
            </div> 
                       
        </div>
    )
}

export default ChatHeading
