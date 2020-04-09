import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{
  
  const APP_ID ='57eedb87';
  const APP_KEY = 'f6b9fcb5e46b9bef1425c9710a896af1';  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] =useState("");
  const[query, setQuery] =useState("pizza");
  useEffect( () =>{
    getRecipes();
  }, [query]);

 const getRecipes =async () =>{
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits)
 }
 const updateSearch = e =>{
   setSearch(e.target.value);
console.log(search);
 }
 const getSearch = e =>{
   e.preventDefault();
   setQuery(search);
   setSearch('');
 }
  return(
<div className="App">
  <h1 className="title">RECIPES APP</h1>
  <form onSubmit={getSearch} className="search-form">
    <input type="text" className="search-bar" value={search} onChange ={updateSearch} />
  <button className="search-button" type="submit">Search</button>
  </form>
  <div className='recipe-items'>
  {recipes.map(recipe=>(
    <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
    image={recipe.recipe.image}
    ingredients={recipe.recipe.ingredients}/>
  ))}
  </div>
 </div>
  );
}

export default App;
