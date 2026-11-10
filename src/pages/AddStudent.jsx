
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { useStudents } from "../context/StudentContext";

export default function AddStudent() {
  const { students, addStudent } = useStudents();
  const navigate = useNavigate();

  function handleAdd(values) {
    const maxId = students.reduce((max, student) => {
      return Math.max(max, Number(student.id.replace("STU-", "")) || 1000);
    }, 1000);

    addStudent({
      ...values,
      id: `STU-${maxId + 1}`
    });

    navigate("/students");
  }

  return (
    <div>
      <h1>Add New Student</h1>
      <p>Register a new student in CampusFlow.</p>

      <StudentForm onSubmit={handleAdd} />
    </div>
  );
}
