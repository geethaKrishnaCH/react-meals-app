import BootstrapButton from "react-bootstrap/Button";
import styles from "./Button.module.css";

function Button({ children, color }) {
  return (
    <>
      <BootstrapButton variant={color}>{children}</BootstrapButton>
    </>
  );
}

export default Button;
