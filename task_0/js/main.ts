// Define Student interface
interface Student {
  firstName: string;
  age: number;
  location: string;
  lastName: string;
}

// Creating students
const student1: Student = {
  firstName: "John",
  age: 20,
  location: "New York",
  lastName: "Doe"
};

const student2: Student = {
  firstName: "Jane",
  age: 21,
  location: "Paris",
  lastName: "Doe"
};

// Array of students
const studentsList = [student1, student2];

// Rendering a table
const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

