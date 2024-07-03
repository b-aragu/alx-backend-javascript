#!/user/bin/env node

//0. Creating an interface for a student

/**
 * This function creates an interface for student
 * @param {string} firstName
 * @param {number} age
 * @param {string} location
 * @param {string} lastName
 */
interface Student {
  firstName: string;
  age: number;
  location: string;
  lastName: string;
}

// creating students
const student1: Student= {
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

// array of students
const tudentsList: student[] = [student1, student2];

// Rendering a table
cont table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
