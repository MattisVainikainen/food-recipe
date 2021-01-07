import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <h3>Ingredients</h3>
            <ol className="list-container">
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>         
           <img src={image} alt=""/>
        </div>

        
    );
}

export default Recipe;