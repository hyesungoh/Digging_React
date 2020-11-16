import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "loading..." : "loaded"}
      </div>
    )
  }
}

export default App;