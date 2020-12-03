## React Hooks?

state와 life cycle을 확인하기 위해 class component를 사용해 왔지만 this, setState, render 등 코드가 길고 커지는 것을 해소하기 위해 제작됨

덕분에 hook들을 이용하여 함수형 component를 사용하여 state와 life cycle 제어가 가능하게 됨

#### [useEffect 보러가기](https://github.com/hyesungoh/React_with_NomadCoders/tree/master/useEffectEx)

---

#### useState

```jsx
// button을 이용하여 state 값을 변경하는 예제
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
```

-   useState는 array 형식을 반환

```jsx
const [value, modifier] = useState(Initial value);
```

-   hooks는 함수형 프로그래밍을 권장

#### useInput

-   ##### Unpacking

```jsx
const someFunc = () => {
    const [value, setValue] = useState();
    const onChange = (event) => {
        something...
    };
    return { value, onChange };
}

const App = () => {
    const name = someFunc();
    <input placeholder="Name" {...name} />;
    {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
}
```

-   useState를 이용하여 useInput 구현

```jsx
// 초기 값과 유효성 검증을 위한 매개 변수
const useInput = (initialValue, validator) => {
    // useState를 이용하여 state사용
    const [value, setValue] = useState(initialValue);
    // input의 onChange
    const onChange = (event) => {
        // const value = event.target;
        const {
            target: { value },
        } = event;
        // 유효성 검증
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        // 유효할 시 setValue로 input의 값을 update
        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

const App = () => {
    // 길이가 10 미만일 시 유효성 검증 함수
    const maxLen = (value) => value.length < 10;
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <input placeholder="Name" {...name} />
        </div>
    );
};
```

#### useTabs

-   함수의 return type을 object로 사용

```jsx
return {
    someValue: value,
    someFunc: func,
};

...use somewhere
const {someValue, someFunc} = thatFunc();
```

-   useState를 이용하여 useTabs 구현

```jsx
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
```
