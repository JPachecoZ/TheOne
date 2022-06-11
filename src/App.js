import { useState, useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch()
  });


  return (
    <p>Hello, World</p>
  );
}

export default App;
