import React, { useState, useEffect } from "react";
import getBooks from "./services/GetData";

function App() {

  const [books, setBooks] = useState([])

  useEffect(()=> {
    getBooks()
      .then((data) => {setBooks(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <ul>
        {books?.map((book)=> (
          <li key={book._id}>{book.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
