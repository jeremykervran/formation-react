import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <div>
      Hello World
      <Button type="reset" style={{ color:"acquamarine" }}>Hello</Button>
      <Button type="submit" style={{ color:"black" }}>World</Button>
    </div>
  );
}

export default App;
