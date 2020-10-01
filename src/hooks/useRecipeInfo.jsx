import { useEffect, useState } from "react";
import axios from "axios";

export default function useRecipeInfo(recipeId) {

  const [recipeInfo, setRecipeInfo] = useState({});

  useEffect(() => {
    if (recipeId == null) return;

    axios
      .get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then(r => setRecipeInfo(r.data.drinks[0]))

  }, [recipeId]);

  return recipeInfo;
}
