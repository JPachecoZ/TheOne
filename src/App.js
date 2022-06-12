import React, { useState, useEffect } from "react";
import getData from "./services/GetData";
import { apiChars } from "./data";
import Row from "./components/Row";

function App() {
  const data = apiChars;
  const [categoriesData, setCategoriesData] = useState([])

  useEffect(()=> {
    // getData()
    // .then((data) => {
        setCategoriesData(data);
      // })
      // .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      {categoriesData?.map((category) => (
        <Row key = {category.name} title = {category.name.toUpperCase()} data={category.data}/>
      ))}
    </React.Fragment>
  );
}

export default App;
