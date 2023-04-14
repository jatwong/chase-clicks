import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const errorMessage = "Oops, error. Contact me!";
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get("/retrieve/")
      .then((res) => {
        setIsLoading(false);
        setHasError(false);
        setCount(res.data["count"]);
      })
      .catch(() => setHasError(true));
  }, []);

  const buttonClick = async () => {
    axios
      .get("/increment/")
      .then((res) => {
        setHasError(false);
        setCount(res.data["count"]);
      })
      .catch(() => setHasError(true));
  };

  let content = <div className="count">{count ? count : "No clicks, yet"}</div>;

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <p>Fetching clicks...</p>}
        {!isLoading && content}
        <button className="clickMe" onClick={buttonClick}>
          Click me!
        </button>
        <p className="errorMsg">{hasError && errorMessage}</p>
      </header>
    </div>
  );
}

export default App;
