import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useConfirm = (message = "", callback, rejection) => {
    if (!callback || typeof callback !== "function") {
        return ;
    }
    if (!rejection || typeof rejection !== "function") {
        return ;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    }
    return confirmAction;
}

const App = () => {
    const deleteWorld = () => console.log("DELETE THE WORLD");
    const saveWorld = () => console.log("SAVE THE WORLD ONE MORE")
    const confirmer = useConfirm("진짜루..?", deleteWorld, saveWorld);

    return (
        <div className="App">
            <button onClick={confirmer}>DELETE WORLD</button>
        </div>
    );
};

export default App;
