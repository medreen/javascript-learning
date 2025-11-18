let person = {
    "name" : "Alice",
    "age" : 40,
    "address" : "123 Long St",
    "is_married": true
}

console.log(person)
console.log(typeof(person))

console.log(person.name)
console.log(person["name"])

//Object methods
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))