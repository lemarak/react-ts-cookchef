import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";
import HeaderMenu from "./HeaderMenu";

export interface IHeaderProps {}

function Header(props: IHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <FontAwesomeIcon icon={faHeart} className="mr-5" />
          <span>panier</span>
        </button>
        <button className="btn btn-primary mr-15">connexion</button>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.headerXs}
        onClick={() => setShowMenu(true)}
      />
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
