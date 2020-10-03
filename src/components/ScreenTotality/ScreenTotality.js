import React, { Component } from 'react'
import {Route, Link, NavLink, BrowserRouter, Switch } from 'react-router-dom'
import Screen1 from '../Screen1/Screen1'
import Screen2 from '../Screen2/Screen2'
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';


export class ScreenTotality extends Component {
    state={
        step: 1
    }

    nextStep=()=>{
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep=()=>{
        this.setState({
            step: this.state.step - 1
        })
    }

    skipStep=()=>{
        this.setState({
            step: 3
        })
    }

    render() {

        switch(this.state.step){
            case 1:
                return(
                    <div>
                        <Screen1 nextStep={this.nextStep} skipStep={this.skipStep}/>
                    </div>
                )
            case 2: 
                return(
                    <div>
                        <Screen2 nextStep={this.nextStep} prevStep={this.prevStep} skipStep={this.skipStep}/>
                    </div>
                )
            case 3:
                return(
                <div>
                    <SignUp/>
                </div>
                )
            default:
                return(
                    <div>
                        <h1 className="text-center">No Screen</h1>
                    </div>
                )
        }
        
    }
}

export default ScreenTotality
