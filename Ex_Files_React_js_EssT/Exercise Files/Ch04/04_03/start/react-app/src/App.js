import "./App.css";
import { useState } from "react";

const [firstCity, second] = [
  "Tokyo", 
  "Bend", 
  "Miami"
];
console.log(firstCity);
console.log(second);

function App({ library }) {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
      <h2>Current emotion {emotion}</h2>
      <button onClick={() => setEmotion("sad")}>
        sad
        </button>
    </div>
  );
}

export default App;
