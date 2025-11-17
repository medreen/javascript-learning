let str = prompt("Enter any text: ")
let age = Number(prompt("Enter your age: "))
let purchase_amount = Number(prompt("Enter any number: "));
let val = Number(prompt("Ente any value: "))
let variable = prompt("Enter any value: ");
let num = prompt("Enter any number: ")
let my_num1 = Number(prompt("Enter a number:(comparison): "))
let my_num2 = Number(prompt("Enter a number:(comparison): "))
let my_num3 = Number(prompt("Enter a number:(comparison): "))
let last_digit = Number(prompt("Enter any number(divisible by 3): "));

if (str.length = 0) {
    console.log("Empty")
} else if (str.length > 0 && str.length <=5){
    console.log("Short")
} else if (str.length > 5 && str.length <=10){
    console.log("Short")
} else if (str.length > 10){
    console.log("Short")}
else {
    console.log("Short")
}



let ticket_price = 0
if (age < 12){
    ticket_price += 5
} else if (age > 18){
    ticket_price += 5
} else if (age > 18 && age <= 12){
    ticket_price +=10
} else if (age < 18 && age >= 60){
    ticket_price += 20
} else if (age > 60){
    ticket_price += 15
} else {
    ticket_price += 0
}
console.log(ticket_price)


let discount = 0
if (purchase_amount <= 100 && purchase_amount  >= 50){
    discount += 20
} else if (purchase_amount <= 50 && purchase_amount >=0){
    discount += 10
} else {
    discount += 0
}
console.log(discount)


if (val === 5){
    console.log("Match")
} else if (val == 5){
    console.log("Match")
}



if (variable.length === 0) {
    console.log("yes");
} else if (!isNaN(Number(variable))) {
    console.log("Number");
} else if (typeof variable === "string") {
    console.log("Text");
} else {
    console.log("Not valid");
}


if (typeof num !== "number" || isNaN(num)) {
    console.log("Not a number");
} else if (Number.isInteger(num)) {
    console.log("Integer");
} else {
    console.log("Float");
}


//7



if (my_num1 > my_num2 && my_num2 > my_num3){
    console.log(`${my_num1}, ${my_num2}, ${my_num3}`)
} else if (my_num2 > my_num1 && my_num1 > my_num3){
    console.log(`${my_num2}, ${my_num1}, ${my_num3}`)
} else if (my_num3 > my_num2 && my_num2 > my_num1) {
    console.log(`${my_num3}, ${my_num2}, ${my_num1}`)
} else if (my_num2 > my_num3 && my_num3 > my_num1) {
    console.log(`${my_num2}, ${my_num3}, ${my_num1}`)
} else if (my_num1 > my_num3 && my_num3 > my_num2) {
    console.log(`${my_num1}, ${my_num3}, ${my_num2}`)
} else if (my_num3 > my_num1 && my_num1 > my_num2) {
    console.log(`${my_num3}, ${my_num1}, ${my_num2}`)
} else {
    console.log("Not a Number.")
}



let lastChar = String(last_digit)[String(last_digit).length - 1];
let lastNum = Number(lastChar);

if (lastNum % 3 === 0) {
    console.log(`The last digit in ${last_digit} is divisible by 3.`);
} else {
    console.log(`The last digit in ${last_digit} is not divisible by 3.`);
}


    