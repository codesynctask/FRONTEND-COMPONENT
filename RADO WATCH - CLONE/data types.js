// 2. Data types
/*
PRIMITIVE

string
number
boolean
undefined
null

NON- PRIMITIVE
array
object

*/

// string
const myName = "Vansh"
// number
let myAge = 16
// boolean
const isMale = true
// undefined
let future = undefined
// null
const pocketMoney = null


// array
const marks = [92,67,83,94,45]
// 92 -- marks[0]
// 67 -- marks[1]

// CREATE(at last)
marks.push(78)

// CREATE (at position)
marks.splice(2,0,34)

// READ (all elements)
// console.log(marks)

// READ (one elements)
// console.log(marks[1])

// UPDATE(one)
marks[0]=99






// object
const userDetails = {
    "name":"Vansh",
    "age":16,
    "course":"HTML+CSS+JS",
    "sayHello":function(){
        console.log("Hello I am ",this.name)
    }
}
// name , age , course ---> properties
// sayHello ---> method
console.log(userDetails["age"]) // bracket notation
console.log(userDetails.age) // dot notation







