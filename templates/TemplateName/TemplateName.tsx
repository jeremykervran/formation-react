import React, { useEffect, useState } from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {
  data: string
}
interface ITemplateNameState {
  value: number
}
const templateNameInitialState = {value: 0}

const TemplateName: React.FC<ITemplateNameProps> = ({data = ""}) => {
  const [state, setState] = useState<ITemplateNameState>(templateNameInitialState)
  
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component props.data:{data}
  </div>
);
}

export default TemplateName;
