import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CocktailsContext = createContext();

export default function CocktailsProvider({ children }) {
  const [cocktails, setCocktails] = useState([]);
  const [search, searchCocktails] = useState({
    ingredient: "",
    category: "",
  });

  useEffect(() => {
    if (!search.ingredient || !search.category) return;

    let formData = new FormData();
    formData.append('i', search.ingredient);
    formData.append('c', search.category);

    axios
      .get(
        "https://thecocktaildb.com/api/json/v1/1/filter.php?" +
        new URLSearchParams(formData)
      )
      .then((r) => setCocktails(r.data.drinks))
      .catch((err) => console.err(err));
  }, [search]);

  return (
    <CocktailsContext.Provider value={{ cocktails, searchCocktails }}>
      {children}
    </CocktailsContext.Provider>
  );
}
