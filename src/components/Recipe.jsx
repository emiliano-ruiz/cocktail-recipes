import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import useRecipeInfo from "../hooks/useRecipeInfo";
import { makeStyles } from "@material-ui/core/styles";

export default function Recipe({ cocktail }) {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{cocktail.strDrink}</h2>
        <img
          className="card-img-top"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => setModalOpen(true)}
          >
            View recipe
          </button>
          <RecipeModal
            open={modalOpen}
            cocktailId={cocktail.idDrink}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

function RecipeModal({open, onClose, cocktailId}) {

  const recipeInfo = useRecipeInfo(cocktailId);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.paper} style={modalStyle}>
        <h2>{recipeInfo.strDrink}</h2>
        <h3 className="mt-4">Instructions</h3>
        <p>{recipeInfo.strInstructions}</p>
        <img
          className="img-fluid my-4"
          src={recipeInfo.strDrinkThumb}
          alt={`Imagen de ${recipeInfo.strDrink}`}
        />
        <h3>Ingredients</h3>
        <ul>
          {getIngredientList(recipeInfo).map((ingredient, i) => (
            <li key={i}>
              {`${ingredient.ingredient} ${ingredient.measure}`}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

function getIngredientList(recipeInfo) {

  let ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!recipeInfo[`strIngredient${i}`])
      break;

    ingredients.push({
      ingredient: recipeInfo[`strIngredient${i}`],
      measure: recipeInfo[`strMeasure${i}`]
    });
  }

  return ingredients;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

