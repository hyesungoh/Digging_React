import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return null;
    }

    const fireNotification = () => {
        if (Notification.permission === "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                    console.log("noti");
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };

    return fireNotification;
};

const App = () => {
    const notificationTrigger = useNotification("Hello Noti", {body: "hello Im body"});

    return (
        <div className="App">
            <h1>hello</h1>
            <button onClick={notificationTrigger}>Notification</button>
        </div>
    );
};

export default App;
