import React, { Component } from 'react'
import './Screen2.css'
import screenimgtwo from "../../images/online-chat.svg"
import groupChat from '../../images/Group Chat-pana.svg'
import screenimgone from '../../images/messaging-app.svg'
import screenimgoneOne from '../../images/online-chat.svg'
import screenimgoneTwo from '../../images/online-messaging.svg'
import { Link, NavLink, BrowserRouter } from 'react-router-dom'



export class Screen2 extends Component {

    continue = (e)=>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e)=>{
        e.preventDefault();
        this.props.prevStep();
    }

    skip = (e) =>{
        e.preventDefault();
        this.props.skipStep();
    }

    render() {
        return (
            <div className="container screen2">
                <div className="img d-flex align-items-center justify-content-center">
                    <div className="container d-flex align-items-center justify-content-center">
                        <div className="row pt-4">
                            <div className="col-md-6 order-md-2 order-1">
                                <div className="container">
                                    <img src={screenimgtwo} className="w-100 screen2-img mt-lg-5" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center">
                                <div className="container">
                                    <h2 className="section__text">Connecting with others is our Goal!!</h2>
                                    <p className="section__text_p">We ensure effective interactions through our Realtime Groupchat.. You can affect a Larger audience, Host Live Meetings and many more..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container pt-0 mt-0 d-flex align-items-between justify-content-between">
                    <button className="btn btn-lg btn-back" onClick={this.back}>Back</button>
                    <button className="btn btn-lg btn-skip" onClick={this.skip}>Skip</button>
                    <button className="btn btn-lg btn-next" onClick={this.continue}>Next</button>
                </div>
               
            </div>
        )
    }
}

export default Screen2
