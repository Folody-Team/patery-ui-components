import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { PateryButton } from '../components/Button';
import { PateryInput } from '../components/Input';
import { PateryLogin } from '../components/Login';
import { PateryMenu } from '../components/Menu';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'

const stories = storiesOf('App test', module);


stories.add('App', () => {
    const [number, setNumber] = useState(0);
    return (
        <PateryMenu component={[
            {
                element: <PateryButton>Login</PateryButton>,
            },
            {
                element: <PateryButton>Login</PateryButton>,
            }
        ]}/>
    );
});
