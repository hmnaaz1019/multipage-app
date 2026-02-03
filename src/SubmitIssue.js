import { useState } from "react";

function SubmitIssue() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");

  const submit = () => {
    if (!name || !category || !issue) {
      alert("Fill all fields");
      return;
    }

    const tickets =
      JSON.parse(localStorage.getItem("tickets")) || [];

    tickets.push({
      name,
      category,
      issue,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("tickets", JSON.stringify(tickets));

    alert("Issue submitted successfully!");

    setName("");
    setCategory("");
    setIssue("");
  };

  return (
    <div className="page">
      <div className="card">

        <h2>Submit Issue</h2>

        <input
          placeholder="Student Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option>Academic</option>
          <option>Technical</option>
          <option>General</option>
        </select>

        <textarea
          placeholder="Describe your problem"
          value={issue}
          onChange={e => setIssue(e.target.value)}
        />

        <button onClick={submit}>Submit</button>

      </div>
    </div>
  );
}

export default SubmitIssue;
