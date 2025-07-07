import styles from "./Button.module.css";

const Button = ({ style, bgColor = "grey", children }) => {
  return (
    <button
    style={{...style, backgroundColor: bgColor}}
    className={styles.Button + " primary-color"}
    >
      {children}
    </button>
  );
};

export default Button;
