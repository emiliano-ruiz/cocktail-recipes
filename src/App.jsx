import React from "react";
import Header from "./components/Header";
import CategoriesProvider from "./contexts/CategoriesContext";
import CocktailsProvider from "./contexts/CocktailsContext";
import SearchForm from "./components/SearchForm";
import CocktailList from "./components/CocktailList";

import "./App.css";

export default function App() {
  return (
    <CategoriesProvider>
      <CocktailsProvider>
          <Header />
          <div className="container mt-5">
            <SearchForm />
            <CocktailList />
          </div>
      </CocktailsProvider>
    </CategoriesProvider>
  );
}


