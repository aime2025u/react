
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

export default function StudentDetails() {
  const { id } = useParams();
  const { students, deleteStudent } = useStudents();
  const navigate = useNavigate();

  const student = students.find(s => s.id === id);

  if (!student) return <p>Student not found.</p>;

  function handleDelete() {
    if (window.confirm("Delete this student?")) {
      deleteStudent(id);
      navigate("/students");
    }
  }

  return (
    <div className="content-card">
      <h1>{student.name}</h1>

      <p><strong>Student ID:</strong> {student.id}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Status:</strong> {student.status}</p>

      <Link to={`/students/${id}/edit`} className="primary-button">
        Edit Student
      </Link>

      <button onClick={handleDelete} className="danger-button">
        Delete Student
      </button>
    </div>
  );
}
