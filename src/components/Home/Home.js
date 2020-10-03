import React, { useState, useEffect } from 'react'
import {Route, Link, Redirect} from 'react-router-dom';
import './Home.css'
import styled from 'styled-components'
import fire from '../../config/firebaseConfig'
import screenimgoneTwo from '../../images/online-messaging.svg'
import AppImg from '../../images/Group-chat.svg'
import RecieverChat from '../RecieverChat/RecieverChat'
import SenderChat from '../SenderChat/SenderChat'
import ChatHeading from '../ChatHeading/ChatHeading'
import { auth } from 'firebase';
import Swal from 'sweetalert2'
import { toast } from 'toast-notification-alert'
import {NotificationContainer, NotificationManager} from 'react-notifications';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from '../Users/Users';





const SearchBar= styled.form`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: transparent;
    padding: 5px;

    @media (max-width: 768px) {
        width: 100%;
    }
`


const Home = () => {

    // states hookss
    const [ListOfusers, setListOfusers] = useState([])
    const [user, setUser] = useState(fire.auth().currentUser)
    const [Text, setText] = useState({text: ""})
    const [readError, setreadError] = useState(null)
    const [writeError, setwriteError] = useState(null)
    const [chats, setChats] = useState([])
    const [usersofChatApp, setusersofChatApp]= useState(null)
    const [chartStarted, setChatstarted]= useState("")
    const corss= "https://cors-anywhere.herokuapp.com/"



//FIREBASE DB SECTION

    const FetchFirebaseRealTimeData= async()=>{
        try {
            //realtime firebase
            fire.database().ref("chats").on("value", snapshot => {
              let chatsFromDb = [];
              snapshot.forEach((snap) => {
                chatsFromDb.push(snap.val());
              });
              
            // firestore retrieve users
            fire.firestore().collection("users").get().then(function(querySnapshot) {
                let changedusersofChatApp= []
                querySnapshot.forEach(function(doc) {
                    if(doc.data().uid !== fire.auth().currentUser.uid){
                        changedusersofChatApp.push(doc.data())
                        setusersofChatApp(changedusersofChatApp)
                    }
                    return null 
                });
            });

              setChats(chatsFromDb);
            });
          } catch (error) {
            setreadError(error);
          }

    }

    const AddChatToFirebaseRealTime= async()=>{
        
        try {
            await fire.database().ref("chats").push({
                content: Text.text,
                timestamp: new Date().toLocaleString(),
                uid: user.uid,
                userr: user.email,
                date: new Date().toLocaleString()
            });

            fire.firestore().collection('chats').doc(user.uid).set({
                content: Text.text,
                timestamp: new Date().toLocaleString(),
                uid: user.uid,
                userr: user.email,
                date: new Date().toLocaleString(),
            }).then(writeResult => {
                console.log('User Created result:', writeResult);
            })

            setText({Text: ""});
        } catch (error) {
            setwriteError(error);
            console.log(writeError)
        }

        window.scrollTo(0, document.body.scrollHeight);
        
    }


    // GET TEXTS, SIGNOUT AND SUBMIT FORM
    const getText = (e)=>{
        setText({text: e.target.value, id: Math.random()*6 + 1})
    }

    const SignOut=()=>{
        fire.auth().signOut().then((user=>{

            // fire.firestore().collection('users').doc(fire.auth().currentUser.uid)
            // .update({isOnline: false, user: this.state.user}).then((req)=> console.log(req)).catch((err)=> console.log(err))

            Swal.fire('Good job!','Logout Sucessful','success' )}
        ))
        .catch((err =>{
            Swal.fire({ icon: 'error', title: 'Oops...', text: 'Logout Failed'})
        }))
    }

    const SubmitText=(e)=>{
        e.preventDefault();
        if(Text.text.trim()=== "" || Text.text=== ""){
            alert("empty text..can't submit")
        }else{
            AddChatToFirebaseRealTime();
        }
        setText({text: ""})
       
        
    }

//UseEffect to signify welcome to the page

    useEffect(()=>{
       user && !usersofChatApp && FetchFirebaseRealTimeData();
        // Swal.fire(`${user.email}`,`Welcome to Howdy`,'success')
        toast.show({title: `Welcome ${user ? user.email: ''} to Howdy`, position: 'topright', type: 'alert'})
    }, [])


    if(!fire.auth().currentUser){
        return <Redirect to="/login"/>
    }



    return (
        <div className="chat-zone">

            <div className="AppCover">

                <div className="App-fixed">

                    <div className="container d-flex align-items-center justify-content-center">
                        <img src={AppImg} className="w-100 screen1-img" alt=""/>
                    </div>

                    <h1 className="text-center">Lamba</h1>

                </div>
            </div>

            <div className="Main-app">
                <div className="">
                    <div className="pb-5 mb-5">

                        <ChatHeading SignOut={SignOut} userDetails={user}/>

                        {/* {
                            
                            usersofChatApp && usersofChatApp.map(peopleonline =>{
                                console.log(usersofChatApp)
                                return(
                                    <Users isOnline={peopleonline.isOnline} uid={peopleonline.uid} email={peopleonline.email}/>
                                )
                            })
                         } */}


                        <div className="container chatBox pb-5 " style={{width: "100%"}}>

                            <p className="text-center text-dark pb-2 pt-2">Today</p>

                            {
                                chats && chats.map(chat =>{
                                    console.log(chats)
                                    if(chat.uid=== user.uid){
                                        return(<SenderChat uid={chat.uid} message={chat.content} time={chat.timestamp} user={chat.userr} date={chat.date}/>)
                                    }
                                    
                                    return(<RecieverChat uid={chat.uid} message={chat.content} time={chat.timestamp} user={chat.userr} date={chat.date}/>)
                                
                                })
                            }

                        </div>
                    </div>
                </div>

                <div className="send-message">
                    <SearchBar onSubmit={SubmitText}>
                        <input className="inp" placeholder="send message" value={Text.text} onChange={getText}/>
                        <button className="btn sear">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button> 
                    </SearchBar>
                </div>
                
            </div>
        </div>
    )
}

export default Home
