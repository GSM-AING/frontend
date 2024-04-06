import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Main";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Topbar />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
