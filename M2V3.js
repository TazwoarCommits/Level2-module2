// 2-3 Sorting and flattening array explained
const a = "apple"

const nums = [55 , 2 , 10 , 1100 , 90, 5]

const sortedNums = nums.sort() ; 

console.log(sortedNums);
console.log(nums);

//

const fruits = ["apples", "Banana", "Grapes", "peer", "avocado"]
const fruits2 = ["apples", "Banana", "Grapes", "peer", "avocado"]

const basket = fruits.sort() ;
const basket2 = fruits2.sort((a, b) => b.localeCompare(a)) ;

console.log(basket);
console.log(fruits);
console.log(fruits2);
console.log(basket2);