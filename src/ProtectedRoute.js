import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("isAdminLoggedIn");

  return isLoggedIn === "true"
    ? children
    : <Navigate to="/login" />;

}

export default ProtectedRoute;
