import React, { useContext, useState } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { CocktailsContext } from "../contexts/CocktailsContext";

export default function SearchForm() {
  const { categories } = useContext(CategoriesContext);
  const { searchCocktails } = useContext(CocktailsContext);
  const [formData, setFormData] = useState({ ingredient: "", category: "" });

  function updateFormData(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchCocktails(formData);
      }}
    >
      <fieldset className="text-center">
        <legend>Search recipes for different cocktails</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="ingredient"
            type="text"
            className="form-control"
            placeholder="Search by ingredient"
            onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={(e) => updateFormData(e.target.name, e.target.value)}
          >
            <option value="">- Select category -</option>
            {categories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary"
            value="Search"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}
