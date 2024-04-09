import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Main";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import "./fonts/woff2/Font.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Topbar />
            <Home />
            <Navbar />
          </>
        }
      />
    </Routes>
  );
}

export default App;
