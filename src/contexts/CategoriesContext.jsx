import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((r) =>
        setCategories(r.data.drinks.map((c) => c.strCategory).sort())
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
