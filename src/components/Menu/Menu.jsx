import '../../style.css';
import React, { useEffect, useState } from "react";

export const PateryMenu = ({
    component = [],
    mode = "light",
}) => {
    const [time, setTime] = useState();


    const currentTime = () => {
        // format hours, minutes and seconds
        const d = new Date(), hours = d.getHours(), minutes = d.getMinutes(),
        time = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${hours > 12 ? 'PM' : 'AM'}`;
        setTime(time);
    }
    useEffect(() => {
        setInterval(() => currentTime(), 2000);
    }, [])
    return (<>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            transition: '0.4s',
            left: 0,
            padding: '1rem',
            width: '100%',
            zIndex: 100,
        }} key="110">
            <nav key="111" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.8rem',
                width: '100%',
                borderRadius: '10px',
                background: '#18181823',
                backdropFilter: 'blur(8px)',
            }}>
                <ul key="112" style={{
                    display: 'flex',
                    padding: '0',
                    margin: '0',
                    overflowX: 'overlay',
                }}>
                    {component.map((item, index) => {
                        return (
                            <li className="menuBtn">{item.element}</li>
                        )
                    })}
                    
                </ul>
                <div className="timeContainer" key="117">
                    <span key="118" style={{
                        color: "#303030",
                        paddingLeft: '16px',
                        minWidth: '100px',
                        paddingRight: '12px',
                        maxWidth: "100px",
                        borderLeft: '1px solid #303030',
                    }}>{time}</span>
                </div>
            </nav>
        </div>
    </>)
}