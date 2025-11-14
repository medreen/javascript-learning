let number = Number(prompt("Enter a number: "))

document.getElementById('demo').innerHTML = message

if (number >= 0 && number <= 100){
    message = ('Number is between 0 and 100.')
} else {
    message = ('Number is not in range.')
}

