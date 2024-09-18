// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.



const obj = {'name': "Rahul", "age":20, "id":22104107};

Object.preventExtensions(obj);

 // This will not be added to the object
obj.DOB = '15/02/2004'

console.log(obj);


modifying
obj.age = 21;
console.log(obj);


// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
// called extensibleStatus.

const obj1 = { name: "Rahul" };
const obj2 = Object.preventExtensions({ age: 20 });


const extensibleStatus1 = Object.isExtensible(obj1)
obj1.age = 20;
console.log(obj1);


const extensibleStatus2 = Object.isExtensible(obj2)

obj2.name='Rahul'
console.log(obj2);


// c) Create a new object called teacher with a 'subject' property set to 'Math'.

const teacher = {'subject': 'Math', 'experience': 10}
// console.log(teacher);

// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.

Object.seal(teacher)

teacher.name = 'Alakh';


delete teacher.experience;

console.log(teacher);


// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus.


const sealedStatus = Object.isSealed(teacher)


// f) Print the extensibleStatus and sealedStatus to the console.

console.log(sealedStatus);
console.log(extensibleStatus1);
console.log(extensibleStatus2);




