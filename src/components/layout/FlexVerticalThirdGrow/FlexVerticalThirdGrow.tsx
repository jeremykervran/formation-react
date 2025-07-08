import React, { useEffect, useState } from 'react';
import styles from './FlexVerticalThirdGrow.module.css';

interface IFlexVerticalThirdGrowProps {
  data: string
}
interface IFlexVerticalThirdGrowState {
  value: number
}
const flexVerticalThirdGrowInitialState = {value: 0}

const FlexVerticalThirdGrow: React.FC<IFlexVerticalThirdGrowProps> = ({data = ""}) => {
  const [state, setState] = useState<IFlexVerticalThirdGrowState>(flexVerticalThirdGrowInitialState)
  
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
  <div className={styles.FlexVerticalThirdGrow} data-testid="FlexVerticalThirdGrow">
    FlexVerticalThirdGrow Component props.data:{data}
  </div>
);
}

export default FlexVerticalThirdGrow;
