import React, { useState, useEffect } from "react";
import "./App.css";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

const App = () => {
    const titleUpdater = useTitle("Loading..");
    setTimeout(() => {
        titleUpdater("HOME");
    }, 3000);
    
    return (
        <div className="App">
            <h1> hello </h1>
        </div>
    );
};

export default App;