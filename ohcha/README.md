# OH-CHA

###### Movie web

---

### 완성본

<div align=center>

![desk](https://user-images.githubusercontent.com/26461307/100463907-f0411680-310f-11eb-853b-3eb783c0ef15.gif)

![ezgif com-gif-maker](https://user-images.githubusercontent.com/26461307/100544524-a2f0b080-3299-11eb-9a7f-7527a74a53cc.gif)
</div>

---

#### Create React App

```terminal
npx create-react-app [appName]
```

#### Virtual DOMC

-   React는 처음부터 HTML을 넣지 않고 빈 HTML에 추가, 삭제함
-   처음에 빈 HTML을 load하여 빠르다고 함

#### JSX

-   JavaScript + HTML

#### Component

-   같은 파일에서 생성하여 사용 가능
-   대문자로 시작해야함

```jsx
// new File > Movie.js
function Movie() {
    return (
        // <div></div>
        // <h3></h3>
        // 위와 같이 여러개의 요소는 안된다고 함

        <div class="something">
            <h3> HELLO IM MOVIE </h3>
            <p style={{ color: "red" }}> is it work? </p>
            // 위와 같이 JSX에서 style 사용가능
        </div>
    );
}

export default Movie;
```

-   React App은 한 번에 하나의 Component만 Render 가능
-   `App,js`에 import하여 사용

```jsx
// from App.js
import Movie from "./Movie.js";

function App() {
    return (
        <div className="App">
            <h1> COOL !!! </h1>
            <Movie /> // Using Component
        </div>
    );
}

export default App;
```

#### Props

-   React Parents Component에서 Child Component로 데이터를 보내는 방법

```jsx
// function Food(props){
//   return (
//     <h1>props.fav</h1>
//   )
// }
function Food({ fav }){
  return (
    <h1>{ fav }</h1>
  )
}

  // ... inside of parents component
  <Food fav="kimchi" />
  <Food fav="pizza" />
  <Food fav="chicken" />
  <Food fav="beef" />
```

#### Dynamic Component Generation

-   동적으로 Component를 Props와 함께 사용하는 방법

```jsx
const foods = [
    {
        name: "brrbrr",
        price: 1200,
    },
    {
        name: "kimchi",
        price: 2000,
    },
];

// ... inside of component
{
    foods.map((food) => <COMPO_NAME name={food.name} price={food.price} />);
}

// old js version
// {foods.map(function(food) {
//   <COMPO_NAME name={food.name} price={food.price} />
// })}
```

#### Map Recap

-   반복되는 Component들을 구별하기 위해 key가 필요

```jsx
const foodWeLike = [
  {
    id: 1,
    name: "kimch",
    price: 2000
  },
  ...
]

// ... inside of component
{foodWeLike.map( food => (
  <Food key={food.id} name={food.name} price={food.price} />
))}
```

#### Protection with prop-types

-   `prop-types` 설치

```terminal
npm i prop-types
```

-   Props의 Type 및 필요 여부를 지정하여 에러 확인 가능하게 해줌

```jsx
import PropTypes from "prop-types";

COMPO_NAME.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
};
```

#### Class Component

-   class 형태로 component를 사용해야 state를 사용할 수 있음
-   재사용성 또한 좋아짐

```jsx
import React from "react";

class App extends React.Component {
  render() {
    return (something JSX)
  }
}
```

#### State

-   class 안에서 사용가능
-   아래와 같이 JSX에서 사용 가능

```jsx
class App extends React.Component {
    state = {
        number: 1,
    };

    render() {
        return <h1> Number = {this.state.number} </h1>;
    }
}
```

-   setState를 이용하여 값을 변경 가능
-   setState 후 자동으로 render 호출, 변경된 값만 update됨

```jsx
...in class
add = () => {
  // 직접적으로 변경하여 render가 호출되지 않아 변경점이 보이지 않음
  // this.state.count = 1;

  // 직접적으로 state를 가져와서 사용하는 방법은 권장되지 않음
  // this.setState({ count: this.state.count + 1 });

  // current를 함수 형식으로 사용 권장
  this.setState(current => ({ count: current.count + 1 }))
}
```

-   미리 변수를 생성하여 짧게 사용 가능

```jsx
...in class
state = {
  name : "hyesung"
}

render() {
  const { name } = this.state;
  return <h1> { name } </h1>
  // this.state.name와 동일
}
```

#### Life Cycle of Component

-   Mounting
    1. constructor
    1. render
    1. componentDidMount
-   Updating
    1. render
    1. componentDidUpdate
-   Unmounting
    1. componentWillUnmount

#### Axios

-   JS fetch의 상위 호환같은 느낌?

```terminal
npm i axios
```

```jsx
import axios from "axios";

...somewhere
axios.get("blahblah.json");
```

#### Async & Await

-   JS es6의 비동기적 실행 방법

```jsx
functionName = async () => {
    const something = await axios.get("blahblah.json");
};
```

#### Get movie data

-   yts api는 주소가 자주 바뀌어 nomadcoders가 자체제작한 api 사용

```jsx
getMovies = async () => {
    const {
        data: {
            data: { movies },
        },
    } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    // movies: movies를 movie로 단축
    this.setState({ movies, isLoading: false });
};
```

#### Movie function component

```jsx
// function component의 인자로 props가 아닌
// props의 특정 값만 가져올 때는 {}으로 감싸야 함
function Movie({id, title, year, summary, poster}) {
    return (
        <div>
            <h1> {title}</h1>
        </div>
    );
}

// 필요한 요소들 propTypes를 이용하여 확인
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ...
};
```

#### Render Movies

```jsx
renderMovies = (movie) => {
      // Map을 이용하여 Component를 호출할 함수
      return (
          <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
          />
      );
  };

render() {
      // isLoading과 movies는 this.state 안에 있는 것이라고 명시
      const { isLoading, movies } = this.state;

      // 삼항연산자를 이용하여 api data get 유무를 파악 후 함수 실행
      return (
          <div>
              {isLoading ? "loading..." : movies.map(this.renderMovies)}
          </div>
      );
  }
```

#### Css with React

-   파일을 만든 후 `import`하여 사용가능

```jsx
// src/App.js
import "./cssFileName.css";
```

```css
/* src/App.css */
body {
    background-color: red;
}
```

#### Using array data

-   string으로 이루어진 array라고 PropTypes 사용

```jsx
Movie.propTypes = {
...
genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
```

-   array data를 map을 이용하여 ul 형태로 작성

```jsx
// "genres": [
//           "Adventure",
//           "Drama",
//           "Family",
//           "Mystery",
//           "Sci-Fi"
//         ],

//map 함수에서 필요로 하는 key 값을 index를 사용
<ul className="genres">
    {genres.map((genre, index) => (
        <li key={index} className="genres__genre">
            {genre}
        </li>
    ))}
</ul>
```

#### React router dom

-   설치

```terminal
npm i react-router-dom
```

-   아래와 같은 형식으로 사용

```jsx
import { HashRouter, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Route path="somePath" component={someCompo} />
        </HashRouter>
    );
}
```

-   아래 방법처럼 url을 겹치게 사용 시 겹친 component를 동시에 렌더링

```jsx
<HashRouter>
    <Route path="/" component={someCompo1} />
    <Route path="/some" component={someCompo2} />
    <Route path="/some/thing" component={someCompo3} />
</HashRouter>
```

-   Route의 exact를 사용하여 path가 동일한 component만 렌더링 가능

```jsx
<HashRouter>
    // "/about" 일 때 "/"를 포함하지만 render되지 않음
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
</HashRouter>
```

#### Navigation

-   navigation component

```jsx
<HashRouter>
    <Navigation />
    <Route path="/somepath" component={something} />
    ...
</HashRouter>
```

-   link, to

```jsx
// <a href="">는 html을 초기화하기 때문에 작동하지 않음
// Link는 Router안에 있어야 사용가능
<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

-   BrowserRouter vs HashRouter

```browser
<!-- in HashRouter -->
/#/something

<!-- in BrowserRouter -->
/something

<!-- HashRouter는 Gh pages 사용 시 편하다고 함 -->
```

#### Sharing props between Routes

-   link, to에 object를 이용할 수 있음

```jsx
function Movie({ id, title, year, summary, poster, genres }) {
    return (
        <Link
            to={{
                // 이동할 곳
                pathname: `/movie/${id}`,
                // state를 이용
                state: {
                    title,
                    year,
                    summary,
                    poster,
                    genres
                }
            }}
        >
    ...something
}
```

-   해당 route의 props.location에 state 위치

#### Redirecting

-   state 상태를 확인 후 history의 push를 이용하여 url을 이동시킬 수 있음

```jsx
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    ...something
}
```

---

### react-transition-group

-   HashRouter 대신 BrowserRouter 사용하니 동작

-   아래와 같이 작성하여 사용

```jsx
const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Switch location={location}>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie/:id" component={Detail} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <AnimatedSwitch />
        </BrowserRouter>
    );
}

export default App;
```

-   아래와 같이 css 작성하여 사용 (_-enter, _-exit, ...)

```css
.fade-appear,
.fade-enter {
    opacity: 0;
    z-index: 1;
}
.fade-appear-active,
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms linear 150ms;
}

.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 150ms linear;
}
```
