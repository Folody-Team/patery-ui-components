import '../../style.css';
import React, { useEffect, useState } from "react";
import { checkDarkLight, uuid } from "../../function";
export const PateryLogin = ({
    text = [],
    heading,
    component,
    className,
    image,
    flex = "column",
    justify = "center",
    align = "center",
    type,
    button = [],
    ...props
}) => {
    try{
        return (
            <div
                className={"login-container"}
                style={{
                    display: "flex",
                    height: "100%",
                }}
                {...props}
            >       
                <div style={{
                    display: "flex",
                    flexDirection: flex === "column" ? "column" : "row",
                    justifyContent: justify === "center" ? "center" : "flex-start",
                    alignItems: align === "center" ? "center" : "flex-start",
                    width: "100%",
                    height: "100vh",
                }}>
                    {heading ? (<h2>{heading}</h2>): null}
                    {text.map((item, index) => {
                        const id = uuid();
                        text.map((item) => {
                            item.id = id;
                        });
                        return (

                            <div cmp={item.id} key={item.id} className={flex === 'column' ? "form-group" + " " + "flex-column" :  "form-group" + " " + "flex-row" }>
                                <label key={
                                item.id
                                }>{item.label}</label>
                                {   
                                    item.inputComponent ? item.inputComponent : <input key={
                                        item.id
                                    } type={item.type} />
                                }
                            </div>
                          
                        )
                    })}
                    {button.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })}
                </div>
                    
                {window.outerWidth < 600 ? (<></>): (<>
                    {image ? (<>
                    <img src={image} onContextMenu={() => {return false}} style={
                        {
                            height: "100vh",
                            width: "500px",
                            objectFit: "cover",
                        }
                    } alt="logo" className="login-logo" />
                </>): (<></>)}
                </>) }
                
            </div>
        )
    } catch (error) {
        if(error.message === "Cannot read property 'map' of undefined"){
            new TypeError("Please add text to the text array");
        }
    }
    
}