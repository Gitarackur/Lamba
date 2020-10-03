import React, { Component } from 'react'
import {Route, Link, Redirect} from 'react-router-dom';
import fire from '../../config/firebaseConfig'
import './SignUp.css'
import login_img from '../../images/Group Chat-pana.svg'
import { auth } from 'firebase';
import Swal from 'sweetalert2'

export class SignUp extends Component {

    state={
        email: '',
        password:'', 
        username:'',
        uid: null,
        isOnline: false
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        // console.log(this.state)
        fire.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then((res)=>{
            Swal.fire('Good job!','Sign up Sucessful','success');

            this.setState({isOnline: true})
            this.setState({uid: fire.auth().currentUser.uid})
            fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
            .set({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                uid: fire.auth().currentUser.uid,
                isOnline: this.state.isOnline
            }).then(writeResult => {
                console.log('User Created result:', writeResult);
            })
            .catch(error => {
                console.log('Something went wrong with added user to firestore: ', error);
            })

            console.log(res)
        }).catch((err)=>{
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Sign up Failed',})
            console.log(err)
        })
    }

    
    handleChange= (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        if(fire.auth().currentUser){
            return <Redirect to="/app"/>
        }

        return (
            <div>
                <div className="container hero">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero_img_holder align  animate__animated animate__fadeInUp">
                                <img src={login_img} className="w-100 screen-img" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signup_form_holder align">
                                <div className="signup_form w-100">
                                    < h2 className = "section__text v_align text_color" > Sign Up </h2>

                                    <form onSubmit={this.handleSubmit}>

                                        <div className="form_element mt-2">
                                            <input type="text" name="username" placeholder="Username" required onChange={this.handleChange}/>
                                        </div>

                                        <div className="form_element mt-2">
                                            <input type="email" name="email" placeholder="Email" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form_element mt-2">
                                            <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
                                        </div>

                                        <div className="btn_holder mt-3">
                                            <button type="submit" className="default_btn w-100">Signup</button>
                                        </div>
                                    </form>

                                    <div className="v_align mt-2">
                                        <p className="">Already have an account? 
                                            <Link to='/Login' className="text_color">Login Here</Link>
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

export default SignUp
