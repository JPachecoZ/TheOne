import { BASE_URI, token } from "../config";
export default async function getData(){
  let query = [
    {category: "book", config: {method: "GET"}},
    {category: "movie", config: {method: "GET", headers: {"Authorization": `Bearer ${token}`}}},
    {category: "character", config: {method: "GET", headers: {"Authorization": `Bearer ${token}`}}},
    {category: "quote", config: {method: "GET", headers: {"Authorization": `Bearer ${token}`}}}
  ];
  
  let data =[];
  
  query.forEach(async (category) => {
    let categoryData;
    const response = await fetch(BASE_URI + category.category, category.config);
    if (response.ok){
      try {
        categoryData = await response.json();
      } catch (error){
        throw new Error(response.statusText);
      }
    }
    
    data.push({name: category.category, data: categoryData.docs});
  })

  return data;
}
