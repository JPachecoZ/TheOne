import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getBooks, getMovies, getCharacters } from "./services/GetData";
import Row from "./components/Row";

const Container = styled.div`
  height: 100vh;
  background-image: url("https://wallpaperaccess.com/full/1201999.jpg");
  background-size: cover;
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
`

function App() {
  const [books, setBooks] = useState({});
  const [movies, setMovies] = useState({});
  const [characters, setCharacters] = useState({});

  useEffect(()=> {
    getBooks()
    .then((data) => {
        console.log(data);
        let newData = {name: "BOOKS", data: data}
        console.log(newData);
        setBooks(newData);
      })
      .catch((error) => console.log(error));

    getMovies()
    .then((data) => {
      let newData = {name: "MOVIES", data: data}
        setMovies(newData);
      })
      .catch((error) => console.log(error));
    
    getCharacters()
    .then((data) => {
      let newData = {name: "CHARACTERS", data: data}
        setCharacters(newData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {(books.name === undefined || movies.name === undefined || characters.name === undefined) ? "" : (
      <>
        <Row key = {books.name} title = {books.name} data={books.data}/>
        <Row key = {movies.name} title = {movies.name} data={movies.data}/>
        <Row key = {characters.name} title = {characters.name} data={characters.data}/>
      </>
      )
      }
    </Container>
  );
}

export default App;
