import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import getData from "./services/GetData";
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
  const [categoriesData, setCategoriesData] = useState([])

  useEffect(()=> {
    getData()
    .then((data) => {
        setCategoriesData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {categoriesData?.map((category) => (
        <Row key = {category.name} title = {category.name.toUpperCase()} data={category.data}/>
      ))}
    </Container>
  );
}

export default App;
