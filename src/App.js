import { useState, useEffect } from "react";

function App() {

  const [books, setBooks] = useState([])

  useEffect(()=> {
    fetch("https://the-one-api.dev/v2/book", {method: "GET"})
      .then((response) => response.json()
        .then((data)=> setBooks(data.docs)
        )
      )
  }, []);


  return (
    <ul>
      {books?.map((book)=> (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>

  );
}

export default App;
