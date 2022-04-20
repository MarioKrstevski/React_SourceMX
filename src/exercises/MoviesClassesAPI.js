import React from "react";
import axios from "axios";
const Movie = ({ movie }) => {
  return <div className="movie">{movie.title}</div>;
};

//classes

class MoviesClassesAPI extends React.Component {
  constructor(props) {
    super(props);
    this.api = "https://yts.mx/api/v2/list_movies.json";
    this.state = {
      movies: [],
      name: "",
    };
  }

  //   myF = () =>{
  //   }
  //   myAnotherF = function (params) {
  //   }.bind(this)

  componentDidMount() {
    axios.get(this.api).then((response) => {
      this.setState({ movies: response.data.data.movies });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      axios.get(this.api).then((response) => {
        this.setState({ movies: response.data.data.movies });
      });
    }
  }

  componentWillUnmount() {
    console.log(" i am unmounted");
  }

  render() {
    let movieStyles = {};

    return (
      <div style={movieStyles}>
        {this.state.movies.map((movie) => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesClassesAPI;
