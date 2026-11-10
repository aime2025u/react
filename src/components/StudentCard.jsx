
import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
  return (
    <Link className="student-card" to={`/students/${student.id}`}>
      <div>
        <h4>{student.name}</h4>
        <p>{student.course}</p>
      </div>
      <span className={`status ${student.status.toLowerCase()}`}>
        {student.status}
      </span>
    </Link>
  );
}
