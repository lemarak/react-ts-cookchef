import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { IRecipe } from "../interfaces";

export interface IContentProps {}

function Content(props: IContentProps) {
  const recipes = data.map((elt: IRecipe) => {
    return <Recipe key={elt._id} recipe={elt} />;
  });

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>{recipes}</div>
      </div>
    </div>
  );
}

export default Content;
