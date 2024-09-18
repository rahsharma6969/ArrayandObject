// Description:
// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.
// Requirements:
// Here is an initial array of students. Each student is represented as an object with the following properties: id,
// firstName, lastName, age, and grade.


// Define the initial array of students
let student = [
    { name: "John", age: 20, grade: 90 },
    { name: "Jane", age: 21, grade: 85 },
    { name: "Bob", age: 19, grade: 95 },
];

// Add new student data
function addNewStudent(name, age, grade) {
    const newStudent = { name, age, grade };
    student.push(newStudent);
    return student;
}

// Delete student by name
function deleteStudent(name) {
   
    const index = student.findIndex(student => student.name === name);

    
    if (index !== -1) {
        const removedStudent = student.splice(index, 1);
        console.log('Student deleted:', removedStudent[0]);
    } else {
        console.log('Student not found');
    }
}

//update function

function updateStudent(name, newInfo) {
    
    const index = student.findIndex(students => students.name === name);
    console.log(index);
    
    
    if (index !== -1) {
        student[index] = { ...student[index], ...newInfo };
        console.log('Student updated:', student[index]);
    } else {
        console.log('Student not found');
    }
}


// Add a new student
const addNewData = addNewStudent("Rahul", 20, 95);
console.log(addNewData);

// Delete a student by name
deleteStudent("Jane"); 

//update
updateStudent("Jane", { age: 22, grade: 88 });
// Display all students to verify the deletion
console.log(student);




