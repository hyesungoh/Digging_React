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
    id: 1,
    name: "kimch",
    price: 2000 
  },
  {
    id: 2,
    name: "doncasu",
    price: 8000
  },
  { 
    id: 3,
    name: "woodong",
    price: 5000
  }];

function App() {
  return (
    <div className="App">
      <h1> COOL !!! </h1>
      
      {foodWeLike.map( food => (
      <Food key={food.id} name={food.name} price={food.price} /> 
      ))}

    </div>
  );
}

export default App;