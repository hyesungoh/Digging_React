import React, { useState } from "react";

import "./App.css";

const App = () => {
    const [item, setItem] = useState(0);
    const addItem = () => setItem(item + 1);
    const minusItem = () => setItem(item - 1);
    return (
        <div className="App">
            hello
            <p>{item}</p>
            <button onClick={addItem}>add</button>
            <button onClick={minusItem}>minus</button>
        </div>
    );
};

export default App;
