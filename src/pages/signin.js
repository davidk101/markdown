import React, {useState} from 'react';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from '../components'; // from components/index.js

export default function Signin(){

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    // check if email and password is valid
    const isInvalid = password == '' || emailAddress == '';

    const handleSignIn = (event) =>{

        event.preventDefault();

        //firebase connection
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
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>

        );
}
