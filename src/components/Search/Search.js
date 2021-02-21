import React, {useEffect, useState} from 'react';
import MealDisplay from "../MealDisplay/MealDisplay"
import "./Search.css"

const SearchPage = (props) => {
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [error, setError] = useState("")
    const [meals, setMeals] = useState([])


    async function getMeals(query, ingredient, category)
    {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        ///filter.php?i=${ingredient}/filter.php?c=${category}`
        console.log(url)
        try
        {
            setError("")
            let response = await fetch(url);
            let json = await response.json();
            console.log(json)
            let newMeals = json.meals.map((v)=> {
                 console.log(v)
            //     let ingList = []
            //     for (let key in v){
            //         console.log(ingList)
            //         if(v[key].includes("strIngredient") && v[key] !== ""){
            //         ingList.push(v[key])
            //         }
            //     }
            //     console.log({id: v.idMeal, meal: v.strMeal, image: v.strMealThumb, ingredientsList: ""})
                return {id: v.idMeal, meal: v.strMeal, image: v.strMealThumb}
            })
            console.log(newMeals[0].image)
            setMeals(newMeals)
            console.log(meals)
        }
        catch(e)
        {
            setError("Something went wrong!")
            setMeals([])
        }
    }

    return(
        <>
        <input type = "text" value = {query} placeholder = "Enter meal name here..."
        onChange = {(e) =>setQuery(e.target.value)}></input>
        <input type = "text" value = {ingredient} placeholder = "Main ingredient..."
        onChange = {(e) =>setIngredient(e.target.value)}></input>
        <select id = "Limit" value = {category} onChange=  {(e)=>{setCategory(e.target.value)}}>
                <option value = "">Select Category</option>
                <option value = "Starter">Starter</option>
                <option value = "Breakfast">Breakfast</option>
                <option value = "Dinner">Dinner</option>
                <option value = "Dessert">Dessert</option>
                <option value = "Starter">Starter</option>
                <option value = "Side">Side</option>
                <option value = "Vegan">Vegan</option>
                <option value = "Vegetarian">Vegetarian</option>
                <option value = "Beef">Beef</option>
                <option value = "Chicken">Chicken</option>
                <option value = "Pork">Pork</option>
                <option value = "Goat">Goat</option>
                <option value = "Lamb">Lamb</option>
                <option value = "Seafood">Seafood</option>
                <option value = "Pasta">Pasta</option>
                <option value = "Miscellaneous">Miscellaneous</option>
            </select>
            <button onClick = {(e) => getMeals(query, ingredient, category)} 
            >Submit</button>
            <div className = "mealContainer">
            {error.length > 0 && <h1>{error}</h1>}
            {error.length === 0 && 
                meals.map((v) => 
                <MealDisplay key = {v.id} image = {v.image} title = {v.meal}/>)
            }
            </div>
        </>
    )

}

export default SearchPage