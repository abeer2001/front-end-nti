var userName = "Abeer"
var lastName = "mohamed"
var fullName = userName + " " + lastName
console.log(fullName)

// ++ increment
var num = 30
console.log(num++) 
console.log(num) 
console.log(++num) 

// // -- Decremennum
console.log(num--) 
console.log(num)
console.log(--num) 

console.log(name == num) 
console.log(name === num) 

console.log(name != num) 
console.log(name !== num) 


console.log(typeof(boonlean)) 
console.log(typeof string )

console.log(typeof Object);

var courses=[ "html","css", "js" ,"bootstrap"]
var newCourse= prompt("enter a cours")
if(courses.includes(newCourse)){
    console.log(newCourse)
}
else {
    courses.push(newCourse)
    console.log(courses)
}