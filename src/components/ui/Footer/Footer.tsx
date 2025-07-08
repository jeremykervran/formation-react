import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

interface IFooterProps {
  data: string
}
interface IFooterState {
  value: number
}
const footerInitialState = {value: 0}

const Footer: React.FC<IFooterProps> = ({data = ""}) => {
  const [state, setState] = useState<IFooterState>(footerInitialState)
  
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
  <div className={styles.Footer} data-testid="Footer">
    Footer Component props.data:{data}
  </div>
);
}

export default Footer;
