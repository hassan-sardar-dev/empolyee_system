import { useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import EmpolyeeDashboard from "./Components/Dashboard/EmpolyeeDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="bg-[#111111]">

      <Login />
      <EmpolyeeDashboard/>
    </div>
    </>
  );
}

export default App;
