import React from 'react';
import {Container} from './styles/form';

export default function ({children, ...restProps}){

    return <Container {...restProps}>{children}</Container>
}
