let str = "medreen"

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


let age = 23
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

let purchase_amount = 800;
let discount = 0
if (purchase_amount <= 100 && purchase_amount  >= 50){
    discount += 20
} else if (purchase_amount <= 50 && purchase_amount >=0){
    discount += 10
} else {
    discount += 0
}
console.log(discount)

let val = 5
if (val === 5){
    console.log("Match")
} else if (val == 5){
    console.log("Match")
}

let variable = '9';

if (variable.length === 0) {
    console.log("yes");
} else if (!isNaN(Number(variable))) {
    console.log("Number");
} else if (typeof variable === "string") {
    console.log("Text");
} else {
    console.log("Not valid");
}

let num = 7.0
if (typeof num !== "number" || isNaN(num)) {
    console.log("Not a number");
} else if (Number.isInteger(num)) {
    console.log("Integer");
} else {
    console.log("Float");
}


//7

my_num1 = 90
my_num2 = 167
my_num3 = 156

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

let last_digit = 89;

let lastChar = String(last_digit)[String(last_digit).length - 1];
let lastNum = Number(lastChar);

if (lastNum % 3 === 0) {
    console.log(`The last digit in ${last_digit} is divisible by 3.`);
} else {
    console.log(`The last digit in ${last_digit} is not divisible by 3.`);
}


    