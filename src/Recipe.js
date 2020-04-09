import React from 'react';
import style from './recipe.module.css';

const Recipe =({title,calories,image,ingredients}) =>{
    return(
        <div>
            <h1 className={style.recipe}>{title}</h1>
            <p>Calories:<br/>{calories}</p>
            <img src={image} alt="" />
            <ul>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}
export default Recipe;