// ======> Array cross matching and Array.from()




// --------> .some
// const numbers = [1,2,3,4,5] ; 
const numbers = [1,3,7,5] ; 

const hasEvenNum = numbers.some(num => num % 2 === 0 ) ; 

// console.log(hasEvenNum);

const currentUserRole = ["user","editor"] ;

const featureAccessRoles = ["admin","manager"]


const canAccess = currentUserRole.some( role => featureAccessRoles.includes(role)) ;

console.log(canAccess);


































