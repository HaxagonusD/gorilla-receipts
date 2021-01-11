import "./App.css";
import data from "./data/Data";
import { useState } from "react";
import Receipt from "./components/Receipt";

function App() {
  const [receipts, setReceipts] = useState(data);
  console.log(receipts);
  return (
    <div className="App">
      {receipts.map((current, index) => {
        return <Receipt {...current} key={index} />;
      })}
    </div>
  );
}

export default App;
