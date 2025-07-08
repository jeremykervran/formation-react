import styles from "./Button.module.css";
import type { ReactElement } from "react";

interface IButtonProps {
  type: "submit" | "reset" | "button";
  style?: { textDecoration: string };
  bgColor: "skyblue" | "tomato";
  children: string | ReactElement | Array<ReactElement | string>;
}

const Button = ({
  type = "button",
  style,
  bgColor,
  children,
}: IButtonProps) => {
  return (
    <button
      type={type}
      style={{ ...style, backgroundColor: bgColor }}
      className={styles.Button + " primary-color"}
    >
      {children}
    </button>
  );
};

export default Button;
