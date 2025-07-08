import styles from "./Button.module.css";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

/**
 * Interface IButtonProps
 *
 * @param type
 * @param style
 * @param bgColor
 * @param children
 */
interface IButtonProps {
  type?: "submit" | "reset" | "button";
  style?: { textDecoration: string; color: string };
  bgColor?: "skyblue" | "tomato";
  children: string | ReactElement | Array<ReactElement | string>;
  onButtonClick?(): undefined;
}

/**
 * Button
 *
 * @param props {IButtonProps} Button Props
 * @returns {React.ReactElement}
 */
const Button = ({
  type = "button",
  style,
  bgColor,
  children,
  onButtonClick,
}: IButtonProps): React.ReactElement => {
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    if(clicked) {
      setTimeout(() => {
        setClicked(false)
      }, 350)
    }
  }, [clicked])

  return (
    <button
      type={type}
      style={{ ...style, backgroundColor: bgColor }}
      className={
        styles.Button + " primary-color" + (clicked ? " " + styles.clicked : "")
      }
      onClick={() => {
        setClicked(true);
        if (undefined !== onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
