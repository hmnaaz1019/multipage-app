import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  // Load tickets
  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(data);
  }, []);

  // Mark ticket as Read
  const markAsRead = (index) => {
    const updated = [...tickets];
    updated[index].status = "Read";
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  // Clear all tickets
  const clearAll = () => {
    localStorage.removeItem("tickets");
    setTickets([]);
  };

  // Filter tickets
  const academicTickets = tickets.filter(
    t => t.category === "Academic"
  );

  const technicalTickets = tickets.filter(
    t => t.category === "Technical"
  );

  const generalTickets = tickets.filter(
    t => t.category === "General"
  );

  // Render list
  const renderList = (list) => (
    list.length === 0 ? (
      <p className="empty-text">No issues</p>
    ) : (
      list.map((t, i) => (
        <div key={i} className="ticket-item">

          <h4>{t.name}</h4>
          <p>{t.issue}</p>
          <small>{t.time}</small>

          <p>
            Status:
            <span
              className={
                t.status === "Read"
                  ? "status-read"
                  : "status-open"
              }
            >
              {t.status}
            </span>
          </p>

          {t.status !== "Read" && (
            <button
              className="small-btn"
              onClick={() => markAsRead(i)}
            >
              Mark as Read
            </button>
          )}

        </div>
      ))
    )
  );

  return (
    <div className="page">

      <div className="admin-board">

        <div className="admin-header">
          <h2>Student Helpdesk Dashboard</h2>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <div className="columns">

          <div className="column academic">
            <h3>Academic</h3>
            {renderList(academicTickets)}
          </div>

          <div className="column technical">
            <h3>Technical</h3>
            {renderList(technicalTickets)}
          </div>

          <div className="column general">
            <h3>General</h3>
            {renderList(generalTickets)}
          </div>

        </div>

        <button
          className="clear-btn"
          onClick={clearAll}
        >
          Clear All Tickets
        </button>

      </div>

    </div>
  );
}

export default Admin;
