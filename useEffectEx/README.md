## React Hooks?

state와 life cycle을 확인하기 위해 class component를 사용해 왔지만 this, setState, render 등 코드가 길고 커지는 것을 해소하기 위해 제작됨

덕분에 hook들을 이용하여 함수형 component를 사용하여 state와 life cycle 제어가 가능하게 됨

#### useState 보러가기

---

#### Basic useEffect

```jsx
useEffect(function);
```

-   위와 같이 사용 시 componentDidMount, componentDidUpdate와 같이 호출됨

```jsx
useEffect(function, [someValue]);
```

-   두 번째 인자가 있을 시 해당 인자가 update될 때 호출 + componentDidMount

```jsx
useEffect(function, [];)
```

-   componentDidMount만 사용하고 싶을 시 빈 인자를 사용하면 됨

#### useTitle

-   html head의 title을 mount, update

```jsx
const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    // html head의 title의 값을 바꿈
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]); // state인 title이 변경 시 updateTitle 함수 호출
    return setTitle;
};

const App = () => {
    const titleUpdater = useTitle("Loading..");
    // setTimeout(() => {
    //     titleUpdater("HOME");
    // }, 3000);

    return (
        <div className="App">
            <h1> hello </h1>
        </div>
    );
};
```
