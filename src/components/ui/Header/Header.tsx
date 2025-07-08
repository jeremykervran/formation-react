import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

interface IHeaderProps {
  data: string
}
interface IHeaderState {
  value: number
}
const headerInitialState = {value: 0}

const Header: React.FC<IHeaderProps> = ({data = ""}) => {
  const [state, setState] = useState<IHeaderState>(headerInitialState)
  
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
  <div className={styles.Header} data-testid="Header">
    Header Component props.data:{data}
  </div>
);
}

export default Header;
