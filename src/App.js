import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ScreenTotality from './components/ScreenTotality/ScreenTotality'
import {Route, Link, NavLink, BrowserRouter, Switch } from 'react-router-dom'
import fire from './config/firebaseConfig'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Screen2 from './components/Screen2/Screen2';
import Screen1 from './components/Screen1/Screen1';
import Home from './components/Home/Home';




export class App extends Component {

  state={
    user:{

    }
  }
   
  AuthForLogin = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
        if(this.state.user){
            this.setState({user})
        }else{
            this.setState({user: null})
        }
    })
  }

  componentDidMount(){
      this.AuthForLogin();
  }


  render() {
    return (
      
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path='/' exact component={ScreenTotality}/>
              <Route path='/Login' component={Login}/>
              <Route path='/SignUp' component={SignUp}/>
              <Route path='/app' component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}


export default App;
