import React, { useEffect, useState } from 'react';
import styles from './MemeForm.module.css';

interface IMemeFormProps {
  data: string
}
interface IMemeFormState {
  value: number
}
const memeFormInitialState = {value: 0}

const MemeForm: React.FC<IMemeFormProps> = ({data = ""}) => {
  const [state, setState] = useState<IMemeFormState>(memeFormInitialState)
  
  useEffect(() => {
    return () => {

    };
  }, []);

  return (
  <div className={styles.MemeForm} data-testid="MemeForm">
  
  </div>
);
}

export default MemeForm;
