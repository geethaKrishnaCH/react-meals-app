import Header from "../header/Header";
import meals from "../../../assets/meals.jpg";
import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <>
      <Header></Header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="" />
      </div>
    </>
  );
}

export default MainHeader;
