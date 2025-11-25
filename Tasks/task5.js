let num1 = Number(prompt("Enter a number: "));
let num2 = Number(prompt("Enter a number: "));
let num3 = Number(prompt("Enter a number: "));

let message
function getLargestNumber(int1, int2, int3){
    if (num1 > num2 && num1 > num3){
        message = `${num1} is the largest.`
    } else if (num2 > num1 && num2 > num3){
        message = `${num2} is the largest.`
    } else if (num3 > num1 && num3 > num2){
        message = `${num1} is the largest.`
    } else if (num1 === num2 && num1 === num3){
        message = `${num1} ${num2} ${num3} are equal.`
    } else if (num1 === num2 && num1 > num3){
        message = `${num1} ${num2} are equal and greater than  ${num3}.`
    } else if (num2 === num3 && num2 > num1){
        message = `${num2} ${num3} are equal and greater than  ${num1}.`
    } else {
        message = `Enter valid number.`
    }
    return message
}

const largest = getLargestNumber(num1, num2, num3)
console.log(largest)





