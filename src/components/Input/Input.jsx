import '../../style.css';
import React, { useEffect, useState } from "react";
import { checkDarkLight, uuid } from '../../function'
export const PateryInput = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    className,
    disabled,
    icon,
    onClick,
    component,
    inputStyle,
    ...props
}) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 }),
    [isRippling, setIsRippling] = useState(false),
    [color, setColor] = useState("light")
    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 350);
        } else setIsRippling(false);
    }, [coords]);
    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    useEffect(() => {
        if(inputStyle === "on"){
            const darkLight = checkDarkLight(".PateryInput");
            if 
            (
                darkLight === "dark"
            ) {
                setColor("dark");
            } 
            else if 
            (
                darkLight === "light"
            ) {
                setColor("light");
            } 
            else 
            {
                setColor("light");
            }
        } if(inputStyle === "off"){
            setColor("light");
        } else {
            new TypeError("inputStyle must be 'on' or 'off'");
        }
    }, [])
    return (
        <>
            {type === "checkbox" ? (<>
                <input 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={className ? "PateryInputCheck" + " " + color + " " + className ?? null : "PateryInputCheck" + " " + color}
                    

                />
                <span className="checkmark"></span>
            </>) : (<>
                <div onContextMenu={() => {return false}} className={
                color + ' ' + 'Input-container'
            }>
                <input
                    // get all attributes of input element and pass them to the input element using props
                    {...props}
                    type={type ? type : "text"}
                    name={name ? name : null}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : ''}
                    onFocus={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                        onClick && onClick(e);
                    }}
                    type={type ? type : "text"}
                    className={className ? "PateryInput" + " " + color + " " + className ?? null : "PateryInput" + " " + color}
                    
                />
                {component ? (<>{component}</>) : (<></>)}
            </div>
            </>)}
        </>
        
        
    )
}