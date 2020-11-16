# OH-CHA

###### Movie web

---

#### Virtual DOM

-   React는 처음부터 HTML을 넣지 않고 빈 HTML에 추가, 삭제함
-   처음에 빈 HTML을 load하여 빠르다고 함

#### JSX

-   JavaScript + HTML

#### Component

-   같은 파일에서 생성하여 사용 가능
-   대문자로 시작해야함

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
import axios from "axios";

...somewhere
axios.get("blahblah.json");
```

#### async & await

-   JS es6의 비동기적 실행 방법

```js
functionName = async () => {
    const something = await axios.get("blahblah.json");
};
```

#### get Movie data

-   yts api는 주소가 자주 바뀌어 nomadcoders가 자체제작한 api 사용

```js
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

```js
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

```js
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
