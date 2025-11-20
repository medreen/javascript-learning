my_arr = [23, "Jane", 560, ["Lesson", "Maths", {"currency": "KES"}], 987, 76, "John"]

//KES
console.log(my_arr[3][2]["currency"])

//560
console.log(my_arr[2])

//Maths
console.log(my_arr[3][1])

my_arr[3][2]["amount"] = 90
console.log(my_arr)

console.log(my_arr[4].sort())