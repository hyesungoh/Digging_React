import React, { useState } from "react";

import "./App.css";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;

        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => value.length < 10;
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <input placeholder="Name" {...name} />
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
        </div>
    );
};

export default App;