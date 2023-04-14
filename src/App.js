import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const [totalClicks, setTotalClicks] = useState(0);
  // const updateClicksHandler = () => {
  //   setTotalClicks((totalClicks) => totalClicks + 1);
  // };

  const [count, setCount] = useState("");

  useEffect(() => {
    axios
      .get("/retrieve/")
      .then((res) => {
        setCount(res.data["count"]);
      })
      .catch((err) => console.log(err));
  }, []);

  const buttonClick = async () => {
    axios
      .get("/increment/")
      .then((res) => {
        setCount(res.data["count"]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="spacing">{count ? count : "No clicks, yet"}</div>
        <button onClick={buttonClick}>Increment here</button>
      </header>
    </div>
  );
}

export default App;
