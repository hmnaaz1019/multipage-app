import { NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="navbar">

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/submit">Submit_Issue</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
      </button>

    </div>
  );
}

export default Navbar;
