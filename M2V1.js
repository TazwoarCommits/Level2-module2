// Map (data structure) -----------> Introduction

// const object = {
//     nextLevel : {courseId : "Level-2"} ,
//     "Programming Hero" : {courseId : "Level-1"} ,
//     true: {courseId : "Level-2"} ,
// } ;

// console.log(object.nextLevel);
// console.log(object["nextLevel"]);
// console.log(object["Programming Hero"]);
// // console.log(object.Programming Hero); ----> cant access with dot notation
// console.log(object["true"]);

// -----------------------

// const obj = {} ;

// obj.nextLevel = {courseId : "Batch-6"} ;
// obj[true] = {courseId : "Batch-5"} ;

// console.log(obj.true);
// console.log(obj);

// ------------------------

const course1 = {name : "P H"} ;
const course2 = { name : "N L"} ;

const obj = {} ;

obj.nextLevel = {courseId : "Level-2"} ;
obj[course1] = {courseId : "Level-1"} ; 

console.log(obj);
console.log(obj["[object Object]"]);
