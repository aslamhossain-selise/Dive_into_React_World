import { useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Logos from "./components/Logos/Logos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Logos />
      <Card setCount={setCount} count={count} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
