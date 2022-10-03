import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { IRecipe } from "../interfaces";
import { useState } from "react";

export interface IContentProps {}

function Content(props: IContentProps) {
  const [filter, setFilter] = useState("");

  const recipes = data
    .filter((elt: IRecipe) => {
      return filter ? elt.title.toLowerCase().startsWith(filter) : true;
    })
    .map((elt: IRecipe) => {
      return <Recipe key={elt._id} recipe={elt} />;
    });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-15" />
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            name=""
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>{recipes}</div>
      </div>
    </div>
  );
}

export default Content;
