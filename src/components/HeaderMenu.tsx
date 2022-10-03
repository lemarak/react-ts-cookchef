import * as React from "react";
import styles from "./HeaderMenu.module.scss";

export interface IHeaderMenuProps {}

function HeaderMenu(props: IHeaderMenuProps) {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
