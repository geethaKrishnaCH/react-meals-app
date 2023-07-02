import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./CartIcon.module.css";

function CartIcon({ count = 0, onClick }) {
  return (
    <div className={styles.cart} onClick={onClick}>
      <AiOutlineShoppingCart size={48} />
      <span className={styles["items-count"]}>{count}</span>
    </div>
  );
}

export default CartIcon;
