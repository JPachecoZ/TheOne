import React, { useState, useEffect } from "react";
import getBooks from "./services/GetData";
import Row from "./components/Row";

function App() {
  const categories = ["BOOKS", "MOVIES", "CHARACTERS", "QUOTES"]
  const [books, setBooks] = useState([])

  useEffect(()=> {
    getBooks()
      .then((data) => {setBooks(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <Row books = {books}/>
    </React.Fragment>
  );
}

export default App;
