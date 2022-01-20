import '../../style.css';
import { useEffect, useState } from 'react';
import { checkDarkLight } from '../../function'
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
        const darkLight = checkDarkLight(".PatteryInput");
        if (darkLight === "dark") {
            setColor("dark");
        } else if (darkLight === "light") {
            setColor("light");
        } else {
            setColor("light");
        }
    }, [])
    return (
        <div onContextMenu={() => {return false}} className={
            className ? color + ' ' + 'Input-container' + className :  color + ' ' + 'Input-container'
        }>
            <input
                {...props}
                placeholder={placeholder ? placeholder : ''}
                onFocus={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                    onClick && onClick(e);
                }}
                type={type ? type : "text"}
                className={className ? "PatteryInput" + " " + color + " " + className ?? null : "PatteryInput" + " " + color}
                
            />
            {component ? (<>{component}</>) : (<></>)}
        </div>
        
    )
}