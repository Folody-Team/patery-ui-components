import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { PateryButton } from '../components/Button';
import './style.css';

const stories = storiesOf('App test', module);

stories.add('App', () => {
    const [number, setNumber] = useState(0);
    return (
        <>
            <PateryButton
                className="hello" 
                onClick={() => {
                setNumber(number + 1);
            }}>+</PateryButton>
            <p>{number}</p>
        </>
    );
});
