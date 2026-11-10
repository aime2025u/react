
import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  course: "Software Development",
  year: "Year 1",
  status: "Active"
};

export default function StudentForm({
  initialValues = emptyForm,
  onSubmit,
  submitLabel = "Save Student"
}) {
  const [form, setForm] = useState({
    ...emptyForm,
    ...initialValues
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.includes("@")) {
      alert("Enter a valid name and email address.");
      return;
    }

    onSubmit(form);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>Full name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter full name"
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
        required
      />

      <label>Course</label>
      <select name="course" value={form.course} onChange={handleChange}>
        <option>Software Development</option>
        <option>Networking</option>
        <option>Multimedia</option>
        <option>Computer Systems</option>
      </select>

      <label>Academic year</label>
      <select name="year" value={form.year} onChange={handleChange}>
        <option>Year 1</option>
        <option>Year 2</option>
        <option>Year 3</option>
        <option>Year 4</option>
      </select>

      <label>Status</label>
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button className="primary-button" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
