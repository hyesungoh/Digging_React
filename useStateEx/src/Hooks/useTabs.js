import React, { useState } from "react";

import "./App.css";

const content = [
    { tab: "section 1", content: "content of section 1" },
    { tab: "section 2", content: "content of section 2" },
];

const useTabs = (initialTab, allTabs) => {
    const [index, setIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[index],
        changeItem: setIndex,
    };
};

const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div className="App">
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>
                    {section.tab}
                </button>
            ))}
            {currentItem.content}
        </div>
    );
};

export default App;