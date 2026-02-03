import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import SubmitIssue from "./SubmitIssue";
import Admin from "./Admin";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitIssue />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
