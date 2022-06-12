import { BASE_URI, token } from "../config";
export default async function getBooks(){
  const response = await fetch(BASE_URI + "book", {method: "GET"});
  let data;
  if (response.ok){
    try {
      data = await response.json();
    } catch (error){
      throw new Error(response.statusText);
    }
  }
  return data.docs;
}

export async function getCharacters(){
  const response = await fetch(BASE_URI + "character", {method: "GET", headers: `Authorization: Bearer ${token}`});
  
  let data;
  try {
    data = (await response.json()).docs;
  } catch (error){
    data = response.statusText;
  }

  return data;
}