import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const token = result.credential.accessToken;

                // The signed-in user info.
                const { displayName, email } = result.user;
                const sinedInUser = {
                    isSinedIn: true,
                    name: displayName,
                    email: email
                }

                setLoggedInUser(sinedInUser);
                history.replace(from);
            })
        }

        return (
            <div>
                <h3>Login With Google</h3>
                <button onClick={handleGoogleSignIn} className="btn btn-warning">Login</button>
            </div>
        );
    };

    export default Login;