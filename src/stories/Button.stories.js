import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { PateryButton } from '../components/Button';
import { PateryInput } from '../components/Input';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'

const stories = storiesOf('App test', module);


stories.add('App', () => {
    const [number, setNumber] = useState(0);
    return (
        <>
            <PateryButton
                types="mint"
                onClick={() => {
                setNumber(number + 1);
            }}>Learn more</PateryButton>
            <PateryInput
                placeholder="Patery UI is the best" 
                component={
                <PateryButton className="hello">Search</PateryButton>
            }/>
            <PateryInput
                placeholder="Patery UI is the best"  
                component={
                <PateryButton className="hello">Search</PateryButton>
            }/>
            <PateryInput 
                placeholder="Patery UI is the best" 
                component={
                <PateryButton className="hello">Search</PateryButton>
            }/>
            <p>{number}</p>
        </>
    );
});
