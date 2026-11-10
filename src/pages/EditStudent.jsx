
import { useNavigate, useParams, Link } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { useStudents } from "../context/StudentContext";

export default function EditStudent() {
  const { id } = useParams();
  const { students, updateStudent } = useStudents();
  const navigate = useNavigate();

  const student = students.find(s => s.id === id);

  if (!student) {
    return <p>Student not found. <Link to="/students">Go back</Link></p>;
  }

  function handleUpdate(values) {
    updateStudent({
      ...student,
      ...values
    });

    navigate(`/students/${id}`);
  }

  return (
    <div>
      <h1>Edit Student</h1>
      <StudentForm
        initialValues={student}
        onSubmit={handleUpdate}
        submitLabel="Update Student"
      />
    </div>
  );
}
