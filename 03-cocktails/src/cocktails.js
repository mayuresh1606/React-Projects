import React from "react"
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
export const Cocktails = () => {
    const {drinks} = useGlobalContext();
    console.log(drinks);
    return <section className="cocktails-section">
        <center><h2>Cocktails</h2></center>
        <section className="cocktails-container">
        {drinks ? drinks.map((drink, drinkIndex) => {
            let {strDrinkThumb, strDrink, strAlcoholic, strGlass, idDrink} = drink;
            drink = {glass:strGlass, cocktail:strDrink, image:strDrinkThumb, type:strAlcoholic, id:idDrink}
            let {glass, cocktail, image, type, id} = drink
            return <article className="cocktail" key={drinkIndex}>
                <img src={image} className="cocktail-image" alt={cocktail} />
                <div className="cocktail-info">
                    <h3 className="drink">{cocktail}</h3>
                    <h5 className="glass">{glass}</h5>
                    <p className="alcoholic">{type}</p>
                    <button className="detail-btn">
                        <Link to={`/singleCocktail/${id}`} className="nav-links">Details</Link>
                    </button>
                </div>
            </article>
        }) : <p className="no-drinks">No drinks to display</p> }
        </section>
    </section>
}