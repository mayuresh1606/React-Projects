import React, { useEffect } from "react";
import { useContext, useState } from "react";
export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; 
    const [drinks, setDrinks] = useState([]);
    const [value, setValue] = useState('l');
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        try{
            setLoading(true);
            const response = await fetch(`${url}${value}`);
            const data = await response.json();
            const {drinks} = data;
            if (drinks === null){
                setDrinks([])
            }
            setDrinks(drinks);
            setLoading(false);

        }catch{
            setDrinks([])
        }
    }

    useEffect(() => {
        fetchData();
        console.log("useEffect called");
    }, [value])

    return <AppContext.Provider value={
        {drinks,
        setDrinks,
        fetchData,
        setValue,
        loading,
    setLoading}
    }>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}