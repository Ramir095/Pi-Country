import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { RoutesAll } from "./routes/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/*" element={ <RoutesAll /> } />
      </Routes>
    </div>
  );
}

export default App;
