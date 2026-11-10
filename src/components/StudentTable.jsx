
import { Link } from "react-router-dom";

export default function StudentTable({ students, onDelete }) {
  if (!students.length) {
    return <p>No students found.</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Year</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.year}</td>
              <td>{student.status}</td>
              <td>
                <Link to={`/students/${student.id}`}>View</Link>{" "}
                <Link to={`/students/${student.id}/edit`}>Edit</Link>{" "}
                <button onClick={() => onDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
