let number = Number(prompt("Enter a number: "))
let email = prompt("Enter email: ")
let phone = prompt("Enter your number: ")


if (number >= 0 && number <= 100){
    console.log('Number is between 0 and 100.')
} else {
    console.log('Number is not in range.')
}


if (email.includes("@") && email.length <= 7 && email.includes(".com")){    
    console.log("Email is valid.")}
else{
    console.log("Can't verify Email.")}
    
if (/[a-zA-Z]/.test(phone)) {
    console.log("Check number.")
}
else if (phone.includes("+") && phone.startsWith("+") && phone.length == 13){    
    console.log("Phone number is valid.")
} else if(phone.length === 12 && phone.startsWith("254")){
    console.log("Phone number is valid.")
} else if (phone.length === 10 && phone.startsWith("0")){
    console.log("Phone number is valid.")
} else if(phone.length === 9 && phone.startsWith("1") || phone.startsWith("7")){
    console.log("Phone number is valid.")
} else {
    console.log("Check number.")
}


