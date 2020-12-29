import React, { useState, useEffect, useRef } from "react";
import defaultAxios from "axios";
import "./App.css";

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null,
    });

    console.log(state);

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });

        setTrigger(Date.now());
    };

    useEffect(() => {
        axiosInstance(options)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data,
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    error,
                });
            });
    }, [trigger]);

    if (!options.url) {
        return;
    }

    return { ...state, refetch };
};

const App = () => {
    const { loading, data, error, refetch } = useAxios({
        url: "some.url",
    });
    return (
        <div className="App">
            <h1>{data ? { data } : "not yet"}</h1>
            <h2>{loading ? "Loading,,," : "Loaded"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};

export default App;
