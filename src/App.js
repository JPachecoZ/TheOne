import { useState, useEffect } from "react";
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
    <ul>
      {books?.map((book)=> (
        <li key={book._id}>{book.name}</li>
      ))}
    </ul>

  );
}

export default App;
