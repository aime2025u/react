
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import StudentTable from "../components/StudentTable";
import StudentSearch from "../components/StudentSearch";

export default function Students() {
  const { students, deleteStudent } = useStudents();
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(student =>
    `${student.name} ${student.email} ${student.course} ${student.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
    }
  }

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Students</h1>
          <p>Manage all student records.</p>
        </div>

        <Link to="/students/new" className="primary-button">
          + Add Student
        </Link>
      </div>

      <div className="content-card">
        <StudentSearch search={search} setSearch={setSearch} />

        <StudentTable
          students={filteredStudents}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
