import React from "react"
import { useGlobalContext } from "./context"

export const Searchbar = () => {
    const {value, setValue, fetchData} = useGlobalContext();
    return <section className="searchbar-container">
        <form className="searchbar-form">
            <p className="cocktail-search">Search here your favourite cocktail</p>
            <input type="text" value={value} onChange={(e) => {
                fetchData();
                setValue(e.target.value)
                }} className="input" />
        </form>
    </section>
}