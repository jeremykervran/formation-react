import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return <div className={styles.Navbar} data-testid="Navbar"></div>;
};

export default Navbar;
