import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  const [counter, setCounter] = useState<number>(0)
  
  useEffect(() => {
    console.log(counter, 'modified')
  }, [counter])

  return (
    <div>
      <h1>Valeur de counter : {counter}</h1>
      Hello World
      <Button style={{ color:"aquamarine", textDecoration:"" }} onButtonClick={() => {
        setCounter(counter+1)
      }}>+1</Button>
      <Button style={{ color:"black", textDecoration: "" }} onButtonClick={() => {
        setCounter(counter-1);
      }}>-1</Button>
    </div>
  );
}

export default App;
