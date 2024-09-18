 
//  8 Sort the array and find the min and max age`
    // 8 Find the median age(one middle item or two middle items divided by two^
    // 8 Find the average age(all items divided by number of items^
    // 8 Find the range of the ages(max minus min^
    // 8 Compare the value of (min - average) and (max - average), use abs() method

const { log } = require("console");

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    ages.sort((a,b) => b-a);
    console.log(ages);
    
    const  minAge = ages.length -1;

    const maxAge = ages[0];

    console.log(`max age:${maxAge} and min age ${minAge}`);
    

// median age for even

let md1= ages.length / 2 -1;
let md2 = ages.length / 2;
const median  = (ages[md1] + ages[md2]) / 2 ;  

console.log(median);

//avg age
let avgAge;
let Agesum =0;
for(let i =0 ; i< ages.length; i++){
      Agesum += ages[i];
}
avgAge = Agesum/  ages.length;

console.log(`Average age : ${avgAge}`);



//range of age

let range = maxAge - minAge;

console.log(`Range of age: ${range}`);


//compare the  value of (min - average) and (max - average), use abs() method

let  minAvg = Math.abs(minAge - avgAge);
let maxAvg = Math.abs(maxAge - avgAge);

console.log(`minAvg : ${minAge} and maxAvg : ${maxAge}`);


