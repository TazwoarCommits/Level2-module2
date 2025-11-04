// 2-3 Sorting and flattening array explained
const a = "apple"

const nums = [55 , 2 , 10 , 1100 , 90, 5]

const sortedNums = nums.sort() ; 

// console.log(sortedNums);
// console.log(nums);

//

const fruits = ["apples", "Banana", "Grapes", "peer", "avocado"]
const fruits2 = ["apples", "Banana", "Grapes", "peer", "avocado"]

const basket = fruits.sort() ;
const basket2 = fruits2.sort((a, b) => b.localeCompare(a)) ;

// localeCompare used to ignore

// console.log(basket);
// console.log(fruits);
// console.log(fruits2);
// console.log(basket2);

const arr1 = [1,2,3,[4,[5,[6,7,8,9]]]] ; 
const arr10 = [10,20,30,[40,[50,[60,70,80,90,[100]]]]] ; 

const arr2 = arr1.flat();
const arr3 = arr1.flat(2)

const arr20 = arr10.flat(Infinity) ;

// console.log("1 Layered nested array removed",arr2);
// console.log("2 Layered nested array removed",arr3);
// console.log("All Layered nested array removed",arr20);


const tagsFromPost = [
  ["Js", "react", "css" ], 
  ["node", "express"],
  ["css", "html", "react"]
]

const filteredTags = new Set(tagsFromPost.flat())

console.log(filteredTags);