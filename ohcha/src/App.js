import PropTypes from "prop-types";

const foodWeLike = [
  {
    id: 1,
    name: "kimch",
    price: 2000,
    rating: 5
  },
  {
    id: 2,
    name: "doncasu",
    price: 8000,
    rating: 9.9
  },
  { 
    id: 3,
    name: "woodong",
    price: 5000,
    rating: 3.2
  }];

function Food({ name, price, rating }) {
  return (
    <div>
      <h3>I LOVE { name }</h3>
      <h4>{ rating }</h4>
      <h5>Its {price} won</h5>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <h1> 스리사랑행 </h1>
      
      {foodWeLike.map( food => (
      <Food key={food.id} name={food.name} price={food.price} rating={food.rating}/> 
      ))}

    </div>
  );
}

export default App;