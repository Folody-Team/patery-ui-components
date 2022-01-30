import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { PateryButton } from '../components/Button';
import { PateryInput } from '../components/Input';
import { PateryLogin } from '../components/Login';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'

const stories = storiesOf('App test', module);


stories.add('App', () => {
    const [number, setNumber] = useState(0);
    return (
        <>
            <PateryLogin 
                flex='column' 
                heading='Login' 
                text={[
                {label: "Username", inputComponent: <PateryInput className={"padding"} inputStyle="light" placeholder="Username" />},
                {label: "Password", inputComponent: <PateryInput className={"padding"} inputStyle="light" type="password" placeholder="Password" />}
                ]}
                button={[
                    <PateryButton className={"padding"} onClick={() => setNumber(number + 1)}>Login</PateryButton>
                ]}
                image="https://www.w3schools.com/w3css/img_lights.jpg"
            />
            <img style={{
                width: "100%",
                height: "100%",
            }} src='https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80'/>
        </>
    );
});
