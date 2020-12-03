import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useClick = (onClick) => {
    const checkItem = useRef();
    useEffect(() => {
        if (checkItem.current) {
            checkItem.current.addEventListener("click", onClick);
        }

        return () => {
            if (checkItem.current) {
                checkItem.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    return checkItem;
};

const App = () => {
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);

    return (
        <div className="App">
            <h1 ref={title}> hello </h1>
        </div>
    );
};

export default App;