function Food({ name, price }) {
  return (
    <div>
      <h3>I LOVE { name }</h3>
      <h5>Its {price} won</h5>
    </div>
  )
}

const foodWeLike = [
  {
    name: "kimch",
    price: 2000 
  },
  { 
    name: "doncasu",
    price: 8000
  },
  { 
    name: "woodong",
    price: 5000
  }];

function App() {
  return (
    <div className="App">
      <h1> COOL !!! </h1>
      
      {foodWeLike.map( food => (
      <Food name={food.name} price={food.price} /> 
      ))}
    </div>
  );
}

export default App;