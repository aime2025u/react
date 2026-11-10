
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateStudent(student) {
  return Boolean(
    student.name?.trim() &&
    validateEmail(student.email) &&
    student.course &&
    student.year
  );
}
