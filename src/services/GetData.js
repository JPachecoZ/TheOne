import { BASE_URI, token } from "../config";

async function apiFetch(category, config){
  let data = [];
  const response = await fetch(BASE_URI + category, config)
  if (response.ok){
    try {
      data = await response.json();
    } catch (error){
      throw new Error(response.statusText);
    }
  }
  console.log(data.docs);
  return data.docs;
}

export function getBooks(){
  return apiFetch("book", {method: "GET"});
}

export function getMovies(){
  return apiFetch("movie", {method: "GET", headers: {"Authorization": `Bearer ${token}`}})
}

export function getCharacters(){
  return apiFetch("movie", {method: "GET", headers: {"Authorization": `Bearer ${token}`}})
}
