import "./App.css";
import { useState } from "react";

function App() {
  const [totalClicks, setTotalClicks] = useState(0);
  const updateClicksHandler = () => {
    setTotalClicks((totalClicks) => totalClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={updateClicksHandler}>Click me!</button>
        <div className="spacing">Total number of clicks: {totalClicks}</div>
      </header>
    </div>
  );
}

export default App;
