import { useState } from "react";
import HomePage from "./Components/HomePage";
import Content from "./Components/Content";

function App() {
  const [filterdata, setfilterdata] = useState("");

  return (
    <>
      <div>
        <HomePage filterdata={filterdata} />
        <Content filterdata={filterdata} setfilterdata={setfilterdata} />
      </div>
    </>
  );
}

export default App;
