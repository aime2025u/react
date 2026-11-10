
import { useStudents } from "../context/StudentContext";
import StatsCard from "../components/StatsCard";
import StudentCard from "../components/StudentCard";
import LifecycleDemo from "../components/LifecycleDemo";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { students } = useStudents();

  const active = students.filter(s => s.status === "Active").length;
  const inactive = students.length - active;

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to your student management workspace.</p>
        </div>

        <Link to="/students/new" className="primary-button">
          + Add Student
        </Link>
      </div>

      <div className="stats-grid">
        <StatsCard title="Total Students" value={students.length} color="#4263eb" />
        <StatsCard title="Active Students" value={active} color="#159b69" />
        <StatsCard title="Inactive Students" value={inactive} color="#e49a36" />
      </div>

      <section className="content-card">
        <h2>Recent Students</h2>

        {students.slice(0, 4).map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </section>

      <LifecycleDemo />
    </div>
  );
}
