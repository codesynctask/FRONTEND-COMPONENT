const marks = [92,67,83,94,45]

// total of marks
// let sumOfMarks = marks[0] + marks[1]

// 4. LOOPS
/*
4.1 initialize(start)
4.2 condition(end)
4.3 update


Loops type
    - for
    - while

*/
let sum = 0
for(let i = 0; i<marks.length ;i++){
    sum+=marks[i]
}
console.log(sum)




// Array specific loop --- ForEach
marks.forEach(function(mark,a){
    console.log(mark,"is on",a)
})
