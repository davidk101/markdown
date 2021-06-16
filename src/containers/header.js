import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import logo from "../markdown_logo.png";

export function HeaderContainer({children}){

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to = {ROUTES.HOME} src = {logo} alt = "Markdown"/>
                <Header.ButtonLink to = {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}

// ...restProps allows us to apply every prop that has been passed down to the styled component
