my_arr = [23, "Jane", 560, ["Lesson", "Maths", {"currency": "KES"}], 987, 76, "John"]

// //KES
console.log(my_arr[3][2]["currency"])

// //560
console.log(my_arr[2])

// //Maths
console.log(my_arr[3][1])

// //amount
my_arr[3][2]["amount"] = 90
console.log(my_arr)

//reverse 987
let num = String(my_arr[4]) 
let x = num.split('')
console.log(x) //['9', '8', '7']
// x.reverse()
// console.log(x) //['7', '8', '9']
// let y = Number(x.join('') )
// console.log(y)//789

// //Jane to John
my_arr[1] = "John"
console.log(my_arr)
