import React, { useEffect, useState } from 'react';
import styles from './FlexHorizontFirstGrow.module.css';

interface IFlexHorizontFirstGrowProps {
  data: string
}
interface IFlexHorizontFirstGrowState {
  value: number
}
const flexHorizontFirstGrowInitialState = {value: 0}

const FlexHorizontFirstGrow: React.FC<IFlexHorizontFirstGrowProps> = ({data = ""}) => {
  const [state, setState] = useState<IFlexHorizontFirstGrowState>(flexHorizontFirstGrowInitialState)
  
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
  <div className={styles.FlexHorizontFirstGrow} data-testid="FlexHorizontFirstGrow">
    FlexHorizontFirstGrow Component props.data:{data}
  </div>
);
}

export default FlexHorizontFirstGrow;
