import styles from "./Header.module.css";
import { Container, Navbar } from "react-bootstrap";
import CartIcon from "../../cart/cart-icon/CartIcon";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container fluid className={styles["container-fluid"]}>
          <Navbar.Brand className={styles["navbar-brand"]}>
            Meals App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="justify-content-end">
            <CartIcon
              count={5}
              onClick={() => {
                console.log("Hi");
              }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
