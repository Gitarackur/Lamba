import React, { Component } from 'react'
import './Screen1.css'
import groupChat from '../../images/Group Chat-pana.svg'
import groupChat1 from '../../images/Group-chat.svg'
import screenimgone from '../../images/messaging-app.svg'
import screenimgoneOne from '../../images/online-chat.svg'
import screenimgoneTwo from '../../images/online-messaging.svg'
// '../../images/Group Chat-pana.svg'
import {Link, NavLink, BrowserRouter } from 'react-router-dom'

class Screen1 extends Component {

    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }

    skip = (e) =>{
        e.preventDefault();
        this.props.skipStep();
    }


    render() {
        return (
            <div className="container screen1">
                <div className="img d-flex align-items-center justify-content-center">
                    <div className="container d-flex align-items-center justify-content-center">
                        <div className="row pt-4">
                            <div className="col-md-6 order-md-1 order-2">
                                <div className="container">
                                    <img src={groupChat1} className="w-100 screen1-img" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center">
                                <div className="container">
                                    <h2 className="section__text ">Welcome to Lamba!</h2>
                                    <p className="section__text_p">Lamba is a lightweight chat app built to help
                                        you connect with other people around in a single place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container pt-0 mt-0 d-flex align-items-between justify-content-between">
                    <button className="btn btn-lg btn-skip" onClick={this.skip}>Skip</button>
                    <button className="btn btn-lg btn-next" onClick={this.continue}>Next</button>
                </div>
               
            </div>
        )
    }
}

export default Screen1
