import React, { useContext } from "react";
import { CocktailsContext } from "../contexts/CocktailsContext";
import Recipe from "../components/Recipe";

export default function CocktailList() {

  const { cocktails } = useContext(CocktailsContext);

  return (
    <div className="row mt-5">
      {cocktails.map((cocktail) => (
        <Recipe key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}
