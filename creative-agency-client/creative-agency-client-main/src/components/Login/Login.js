import React, { useContext } from 'react';
import * as firebase from "firebase/app";
// import firebaseConfig from '../configs/firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import "firebase/auth";
import './Login.css';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/google.svg'
import { UserContext } from '../../App';
import firebaseConfig from '../configs/firebase.config';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            
        const newLoggedInUser={
            displayName:result.user.displayName,
            email:result.user.email,
            photoURL:result.user.photoURL,
        }
            setLoggedInUser(newLoggedInUser)
            storeToken();

          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const storeToken = ()=> {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('idToken',idToken);
            history.push(from)
        }).catch(function(error) {
            // Handle error
        });
    }

    return (
        <div className="login-root text-center w-100">
            <Link to="/">
                <img className="mx-auto mt-5"  src={logo} alt=""/>
            </Link>
           <div className="login-form shadow mx-auto mt-5 p-5 h-50">
               <h3 className="mb-5">Login With</h3>
               <div className="google-login d-flex align-items-center">
                   <img src={google} alt=""/>
                   <p onClick={handleGoogleSignIn}>Continue with Google</p>
               </div>
                   <p className="mt-3">Don't have an account? <a href="#" onClick={handleGoogleSignIn}>Create an account</a></p>
           </div>
        </div>
    );
};

export default Login;