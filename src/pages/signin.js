import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from "../context/firebase";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from '../components'; // from components/index.js
import * as ROUTES from '../constants/routes';

export default function Signin(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext); // destructuring firebase
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // check if email and password is valid
    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) =>{

        event.preventDefault();

        //firebase connection
        firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => { // returns a promise

            // push to browse page
            history.push(ROUTES.BROWSE);
            }).catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
        });
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit = {handleSignIn} method = "POST">
                        <Form.Input placeholder = "Email Address"
                                    value = {emailAddress}
                                    onChange = {({target}) => setEmailAddress(target.value)}>
                        </Form.Input>
                        <Form.Input placeholder = "Password"
                                type = "password"
                                autoComplete = "off"
                                value = {password}
                                onChange = {({target}) => setPassword(target.value)}>
                        </Form.Input>
                    <Form.Submit disabled = {isInvalid} type = "submit">
                        Sign in
                    </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to markdown? <Form.Link to = "/signup">Sign up now.</Form.Link>
                    </Form.Text>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>

        );
}
