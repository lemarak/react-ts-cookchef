import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Recipe.module.scss";
import { IRecipe } from "../interfaces";

type IRecipeProps = {
  recipe: IRecipe;
};

function Recipe({ recipe }: IRecipeProps): JSX.Element {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3 className="mr-5" onClick={() => setLiked(!liked)}>
          {recipe.title}
        </h3>

        {liked && <FontAwesomeIcon icon={faHeart} />}
      </div>
    </div>
  );
}

export default Recipe;
