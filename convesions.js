//convertin data types of data

let str = "5"
let str_num = Number(str)
let num2 = parseFloat(str)
let num3 = parseInt(str)

console.log(str_num)
console.log(num2)
console.log(num3)

console.log(typeof(str))
console.log(typeof(str_num))
console.log(typeof(num2))
console.log(typeof(num3))

let value1 = "5"
let value2 = 12
let new_value = 5/12
let new_value2 = value1 / value2

console.log(new_value)
console.log(new_value2)

//carry out type conversion since user input is always a string
let user_inp1 = Number(prompt('Enter a number'))
let user_inp2 = prompt('Enter a number: ')
console.log(typeof(user_inp2))
console.log(typeof(user_inp1))
le