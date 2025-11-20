let colors = ["red", "green", "blue"]
colors[1] = "pink"

console.log(colors)

len = colors.length
console.log(len)

colors.pop()
console.log(colors)

let arr1 = ["mango", "banana", "kiwi"]
let arr2 = ["yellow", "violet", "lilac"]

let combinedArray = arr1.concat(arr2)
console.log(combinedArray)

combinedArray.shift()
console.log(combinedArray)

extractedArray = combinedArray.slice(2, 5)
extractedArray.splice(0, 3, "x", "y", "z")
console.log(extractedArray)