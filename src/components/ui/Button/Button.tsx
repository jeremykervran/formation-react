import styles from "./Button.module.css";
import type { IButtonProps } from "../../interfaces/IButtonProps";

const Button = ({ style, bgColor="tomato", children }: IButtonProps) => {
  return (
    <button
    style={{ ...style, backgroundColor: bgColor }}
    className={ styles.Button + " primary-color" }
    >
      { children }
    </button>
  );
};

export default Button;
