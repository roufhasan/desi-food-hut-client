import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-primary">Hello How R U?</h1>
      <button className="neutral btn btn-primary">Submit</button>
    </>
  );
}

export default App;
