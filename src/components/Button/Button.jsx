import "../../style.css";
import React, { useEffect, useState } from "react";
import { checkDarkLight } from "../../function";
export const PateryButton = ({
  children,
  className,
  onClick,
  disabled,
  types,
  background,
  icon,
  // all props of button element will be passed to the button element as is
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
  // check dark mode and light mode of browser to set the color of the button in react
    useEffect(() => {
        const darkLight = checkDarkLight(".PatteryButton");
        if (darkLight === "dark") {
            setColor("dark");
        } else if (darkLight === "light") {
            setColor("light");
        } else {
            setColor("light");
        }
    }, []);
  return (
    <button
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      className={
        className ? "PateryButton" + " " + color + " " + className ?? null : "PateryButton" + " " + color
      }
      id="button"
      style={{
        background: background ? background : ""
      }}
      disabled={disabled}
      {...props}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      {icon ? (<>{icon}</>) : (<></>)}
      <span className="content">{children}</span>
    </button>
  );
};
