
import { createContext, useContext, useEffect, useReducer } from "react";

const StudentContext = createContext();

const initialStudents = [
  {
    id: "STU-1001",
    name: "Aline Uwase",
    email: "aline@example.com",
    course: "Software Development",
    year: "Year 2",
    status: "Active"
  },
  {
    id: "STU-1002",
    name: "Kevin Niyonzima",
    email: "kevin@example.com",
    course: "Networking",
    year: "Year 1",
    status: "Active"
  },
  {
    id: "STU-1003",
    name: "Diane Mukamana",
    email: "diane@example.com",
    course: "Multimedia",
    year: "Year 3",
    status: "Inactive"
  }
];

function studentReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "UPDATE":
      return state.map(student =>
        student.id === action.payload.id
          ? action.payload
          : student
      );

    case "DELETE":
      return state.filter(student => student.id !== action.payload);

    default:
      return state;
  }
}

export function StudentProvider({ children }) {
  const [students, dispatch] = useReducer(
    studentReducer,
    initialStudents,
    () => {
      try {
        const saved = localStorage.getItem("students");
        return saved ? JSON.parse(saved) : initialStudents;
      } catch {
        return initialStudents;
      }
    }
  );

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = student =>
    dispatch({ type: "ADD", payload: student });

  const updateStudent = student =>
    dispatch({ type: "UPDATE", payload: student });

  const deleteStudent = id =>
    dispatch({ type: "DELETE", payload: id });

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("useStudents must be used inside StudentProvider");
  }

  return context;
}
