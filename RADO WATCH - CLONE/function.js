// 3. functions
/*

3.1 declare(function) : function sayHello()
3.2 define
    {
        console.log("Hello Vansh")
    }

3.3 call
sayHello()


- parts
    name,
    parameters(default , multiple)
    arguemnets
    return 

*/

function sayHello(user="guest",age=0) {
    console.log(`Hello ${user} you are ${age} year old`)
}

sayHello("Vansh",16)
sayHello("John",25)
sayHello("Deepak",22)
sayHello()


function add(a,b) {
    let res = a + b
    return res
}

let sumOfData = add(6,7)
console.log("result after sum",sumOfData)