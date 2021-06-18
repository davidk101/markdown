import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from "../context/firebase";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from '../components'; // from components/index.js
import * as ROUTES from '../constants/routes';

export default function Signup(){

    const history = useHistory(); // when someone signs up we want to redirect them to browse page
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // check if email and password and first name is valid
    const isInvalid = password === '' || emailAddress === '' || firstName === '';

    const handleSignup = (event) => {
        event.preventDefault();

        // firebase connection

    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit = {handleSignup} method = "POST">
                        <Form.Input placeholder = "First Name"
                                    value = {firstName}
                                    onChange = {({target}) => setFirstName(target.value)}>
                        </Form.Input>
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
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                       Already a user? <Form.Link to = "/signin">Sign In now.</Form.Link>
                    </Form.Text>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>

    );
}
