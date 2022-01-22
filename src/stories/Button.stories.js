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
                <img src="https://i.pinimg.com/564x/c9/d2/e8/c9d2e86d969935c851f859225074bdb8.jpg"/>
            }/>
            <p>{number}</p>
        </>
    );
});
