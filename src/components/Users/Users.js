import React from 'react'
import './Users.css'

const Users = (props) => {
    return (
        <div>
            <div className="container-fluid d-flex mt-5" style={{width: "100%"}}>
                <div className="pic">
                    <img src="https://i.imgur.com/Yxje2El.jpg" className=""/>
                </div>
                <div className="headd">
                    <h5 className="section__text">{props.email}</h5>
                    <div>
                        <i></i><p>{props.isOnline ? "Online": "Offline"}</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Users
