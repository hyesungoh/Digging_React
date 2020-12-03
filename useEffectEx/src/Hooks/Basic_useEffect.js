import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const sayHello = () => {
        console.log("hello?");
    };
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(sayHello);
    
    return (
        <div className="App">
            <h1> hello </h1>
            <button
                onClick={() => {
                    setNum1(num1 + 1);
                }}
            >
                {num1}
            </button>

            <button
                onClick={() => {
                    setNum2(num2 + 1);
                }}
            >
                {num2}
            </button>
        </div>
    );
}

export default App;
