import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Destination />} path="/destination" />
        <Route element={<Crew />} path="/crew" />
        <Route element={<Technology />} path="/technology" />
      </Routes>
    </>
  );
}

export default App;
