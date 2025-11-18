// let values = [1, 3, 6, "JANE", [false, 8, "jay"], 900]

// console.log(values[4][2])
// console.log(typeof(values))

let names = ["jane", "kobe", "bryant", "gerore"]
// names[2] = "killian"
// console.log(names)

// let no_of_names = names.length
// console.log(no_of_names)

// names.push("Anne", "Jill")
// console.log(names)
names.unshift()

console.log(names)

//splice (removing elements)
let data = [100, 200, 5, false, "Jane"]
data.splice(1, 0)
console.log(data)

//splice (adding items in an array)
data.splice(1, 0, "three")
console.log(data)

//splice to replace values
data.splice(2,2,"five",true)
console.log(data)

//slice
console.log(data.slice(0,4))

//indexOf and lastIndexOf
numbers = [1,2,3,3,3,34, 45, 4]
console.log(numbers.indexOf(3))

console.log(numbers.lastIndexOf(3))

//includes
console.log(numbers.includes(9))

//sort
console.log(names.sort())
console.log(numbers.sort()) //checks the index of a value and compares it with the other corresponding index

//reverse 
names.reverse()
console.log(names)

//join 
let x = numbers.join('*')
console.log(x)

//toString
console.log(names.toString())

//at
console.log(names.at(-2))

//copyWithin
y = [100, 200, 300, 400, 500, 600]
y.copyWithin(3, 0, 4)
console.log(y)