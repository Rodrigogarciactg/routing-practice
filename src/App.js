import "./App.css";
import Home from "./Components/Home";
import ParamsComponent from "./Components/ParamsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* this is a hard path : no params in the route */}
          <Route path="/home" element={<Home />} />
          {/* there are two potential routes for the paramscomponent : word is or number is */}
          <Route path="/:word" element={<ParamsComponent />} />
          {/* the values (params) can be desturcred from the useParam hook and used as variables, just like values desturcred form props : word, color, bgcol  */}
          <Route path="/:word/:color/:bgCol" element={<ParamsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
