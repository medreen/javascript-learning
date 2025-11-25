let my_num = Number(prompt("Enter any number of your choice:"))
let message = ""

function checkParity(number){
    if (number%2 === 0 && number%4 === 0){
        message += `${number} is even and is divisible by 4.`
    } else if (number % 2 === 0 && number % 4 !== 0){
        message += `${number} is even but is not divisible by 4.`
    } else if (number % 2 !== 0){
        message += `${number} is odd.`
    } else {
        message += `${number} is not valid`
    }
    return message
}

let numParity = checkParity(my_num);
console.log(numParity)
