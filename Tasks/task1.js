const base = Number(prompt("Enter the base length(cm): "))
const height = Number(prompt("Enter the height length(cm): "))

function getArea(base,height){
    let area = base * height;
    return `The area is ${area}cm.`
}

let area = getArea(base,height)
console.log(area)