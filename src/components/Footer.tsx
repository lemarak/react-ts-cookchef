import styles from "./Footer.module.scss";

export interface IFooterProps {}

function Footer(props: IFooterProps) {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center`}
    >
      <p>Copyright © 2022 Cookchef Dyma, Inc.</p>
    </footer>
  );
}

export default Footer;
