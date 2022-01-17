import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleCocktail = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
    const [cocktail, setCocktail] = useState([]);
    const {id} = useParams();
    const {loading, setLoading} = useGlobalContext();
    
    useEffect(() => {
        const fetchDrink = async() => {
            try{
                const response = await fetch(`${url}${id}`);
                console.log(response);
                const data = await response.json();
                if (data.drinks){
                    setCocktail(data.drinks[0])
                }
                else{
                    return <section className="drinks-container">
                        <h2>No cocktails to display</h2>
                    </section>
                }
            }
            catch(err){
                console.log(err);
            }
        }
        setLoading(true);
        fetchDrink();
        setLoading(false);
    }, [id])
    
    const {strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass, strIngredient1, strIngredient3, strIngredient2, strIngredient4, strInstructions} = cocktail
    return <section className="drink-container">
        <div className="row-1">
            <button className="detail-btn back-home"><Link to="/" className="nav-links">Back Home</Link></button>
            <h4>{strDrink}</h4>
        </div>
        <div className="row-2">
            <img className="side-image" src={strDrinkThumb} alt={strDrink} />
            <div className="drink-info">
                <p className="info-p"><span className="info-tag">Name:</span><span className="drink-info-tag">{strDrink}</span></p>
                <p className="info-p"><span className="info-tag">Category:</span><span className="drink-info-tag">{strCategory}</span></p>
                <p className="info-p"><span className="info-tag">Type:</span><span className="drink-info-tag">{strAlcoholic}</span></p>
                <p className="info-p"><span className="info-tag">Glass:</span><span className="drink-info-tag">{strGlass}</span></p>
                <p className="info-p"><span className="info-tag">Instructions:</span><span className="drink-info-tag">{strInstructions}</span></p>
                <p className="info-p"><span className="info-tag">Ingredients:</span><span className="drink-info-tag">{strIngredient1 + ' ' + strIngredient2 + ' ' + strIngredient3 + ' ' +strIngredient4}</span></p>
            </div>
        </div>
    </section>
}

export default SingleCocktail