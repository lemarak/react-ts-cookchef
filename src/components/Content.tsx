import styles from "./Content.module.scss";

export interface IContentProps {}

function Content(props: IContentProps) {
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
          <div className={styles.elem}>Element</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
