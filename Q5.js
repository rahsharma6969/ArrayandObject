// Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a
// 'for...in' loop to iterate over the properties of the student object and print each property and its corresponding
// value to the console. The output should look something like this:



const student = {
    name:'Rahul',
    age:20,
    GPA:'8.7',
    major:'computer science',
    isEnrolled: true
}


function displayStudentInfo(info){
    
    for(let key in info){
        console.log(`${key} : ${info[key]}`);
        
    }
}

displayStudentInfo(student)