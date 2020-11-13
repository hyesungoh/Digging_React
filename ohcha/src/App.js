function Food({ fav }) {
  return (
    <h3>I LOVE { fav }</h3>
  )
}


function App() {
  return (
    <div className="App">
      <h1> COOL !!! </h1>
      
      <Food fav="kimchi" />
      <Food fav="pizza" />
      <Food fav="chicken" />
      <Food fav="beef" />
    </div>
  );
}

export default App;