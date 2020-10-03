import React, { Component } from 'react'
import {Route, Link, Redirect} from 'react-router-dom';
import fire from '../../config/firebaseConfig'
import './Login.css'
import login_alt_img from '../../images/Group-chat.svg'
import screenimgoneTwo from '../../images/online-messaging.svg'
import Swal from 'sweetalert2'

export class Login extends Component {


    state={
        email: '',
        password: '',
        user: null, 
        isOnline: false
    }

    handleChange= (e)=>{
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            console.log(user)
            this.setState({isOnline: true})
            // fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
            // .update({isOnline: this.state.isOnline, user: fire.auth().currentUser.uid})
            // .then(writeResult => {
            //     console.log('User Is Online:', writeResult);
            // })
        }).catch((err)=>{
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Login Failed',})
        })
    }


    render() {  
       if(fire.auth().currentUser){
            return <Redirect to ="/app"/>
        }

        return (
            <div>
                <div className="container hero">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="hero_img_holder align  animate__animated animate__fadeInUp">
                                <img src={screenimgoneTwo} className="w-100 screen-img" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signup_form_holder align">
                                <div className="signup_form w-100">
                                    < h2 className = "section__text v_align text_color"> Login</h2>
                                    <form onSubmit={this.handleSubmit}>
                                    
                                        <div className="form_element mt-2">
                                            <input type="email" name="email" placeholder="Username" required onChange={this.handleChange}/>
                                        </div>
                                    
                                        <div className="form_element mt-2">
                                            <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
                                        </div>

                                        <div className="btn_holder mt-3">
                                            <button type="submit" className="default_btn w-100">Login</button>
                                        </div>
                                    </form>

                                    <div className="v_align mt-2">
                                        <p className="">Don't have an account? 
                                            <Link to='/SignUp' className="text_color">Signup Here</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Login
