import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card home-card">

        <h1 className="home-title">
          🎓 Student Helpdesk Portal
        </h1>

        <p className="home-subtitle">
          A simple platform where students can submit
          their problems and get help quickly.
        </p>

        <div className="home-features">
          <p>✔ Submit Issues Online</p>
          <p>✔ Academic / Technical / General Support</p>
          <p>✔ Admin Dashboard</p>
          <p>✔ Fast & Easy</p>
        </div>

        <button
          className="home-btn"
          onClick={() => navigate("/submit")}
        >
          Submit an Issue
        </button>

      </div>
    </div>
  );
}

export default Home;
