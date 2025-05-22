import { ingredients } from "@/services/ingredients";
import React from "react";

export const useIngredients = () => {
    const [ingredientData, setIngredientData] = React.useState([]);
    React.useEffect(() => {
        ingredients().then((data) => setIngredientData(data));
    }, []);
    return ingredientData
}