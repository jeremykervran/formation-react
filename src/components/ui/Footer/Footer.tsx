import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return <div className={styles.Footer} data-testid="Footer">
    Copyright Kervran 2025
  </div>;
};

export default Footer;
