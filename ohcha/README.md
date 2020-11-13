# OH-CHA
###### Movie web
---
#### Virtual DOM
- React는 처음부터 HTML을 넣지 않고 빈 HTML에 추가, 삭제함
- 처음에 빈 HTML을 load하여 빠르다고 함


#### JSX
- JavaScript + HTML


#### New Component
- 같은 파일에서 생성하여 사용 가능
- 대문자로 시작해야함

```js
// new File > Movie.js
function Movie() {
    return (
        // <div></div>
        // <h3></h3>
        // 위와 같이 여러개의 요소는 안된다고 함

        <div class="something">
            <h3> HELLO IM MOVIE </h3>
            <p style={{color: 'red'}}> is it work? </p>
            // 위와 같이 JSX에서 style 사용가능
        </div>
    )
}

export default Movie;
```

- React App은 한 번에 하나의 Component만 Render 가능
- `App,js`에 import하여 사용

```js
// from App.js
import Movie from './Movie.js';

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

- React Parents Component에서 Child Component로 데이터를 보내는 방법
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

  // ,,, inside parents component
  <Food fav="kimchi" />
  <Food fav="pizza" />
  <Food fav="chicken" />
  <Food fav="beef" />
```