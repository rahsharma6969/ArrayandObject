// Description:
// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.
// Requirements:
// Here is an initial array of students. Each student is represented as an object with the following properties: id,
// firstName, lastName, age, and grade.





let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Jim', lastName: 'Beam', age: 19, grade: 'A' },
    { id: 4, firstName: 'Anna', lastName: 'Taylor', age: 21, grade: 'C' }
  ];
  
  // a. Add a Student
  function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
    console.log(`Student ${firstName} ${lastName} added successfully!`);
  }
  
  // b. Update Student Information
  function updateStudent(id, updatedInfo) {
    let student = students.find(student => student.id === id);
    if (student) {
      Object.assign(student, updatedInfo);
      console.log(`Student with ID ${id} updated successfully!`);
    } else {
      console.log('Student not found.');
    }
  }
  
  // c. Delete a Student
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      console.log(`Student with ID ${id} deleted successfully!`);
    } else {
      console.log('Student not found.');
    }
  }
  
  // d. List All Students
// d. List All Students using a traditional for loop
function listStudents() {
    if (students.length === 0) {
      console.log('No students available.');
    } else {
      console.log('List of students:');
      for (let i = 0; i < students.length; i++) {
        const student = students[i];
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
      }
    }
  }
  
  
  // e. Find Students by Grade
  function findStudentsByGrade(grade) {
    const filteredStudents = students.filter(student => student.grade === grade);
    if (filteredStudents.length > 0) {
      console.log(`Students with grade ${grade}:`);
      filteredStudents.forEach(student => {
        console.log(`${student.firstName} ${student.lastName}, Age: ${student.age}`);
      });
    } else {
      console.log(`No students found with grade ${grade}.`);
    }
  }
  
  // f. Calculate Average Age
  function calculateAverageAge() {
    if (students.length === 0) {
      console.log('No students available to calculate average age.');
      return;
    }
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`The average age of students is ${averageAge.toFixed(2)} years.`);
  }
  
  // Test Cases
  
  // Add a new student
  addStudent(5, 'Emily', 'Davis', 23, 'B');
  
  // Update a student's information
  updateStudent(2, { firstName: 'Jane', lastName: 'Doe', age: 23, grade: 'A' });
  
  // Delete a student
  deleteStudent(3);
  
  // List all students
  listStudents();
  
  // Find students by grade
  findStudentsByGrade('A');
  
  // Calculate average age of all students
  calculateAverageAge();
  


