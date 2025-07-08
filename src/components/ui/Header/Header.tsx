import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return <div className={styles.Header} data-testid="Header"></div>;
};

export default Header;
