let number = Number(prompt("Enter a number(check if even or odd): "))
num1 = Number(prompt("Enter a number(check largest number): "))
num2 = Number(prompt("Enter a number(check largest number): "))
year = Number(prompt("Enter a year(check if leap year): "))
temp = Number(prompt("Enter user temoerature(degrees celcius): "))
x = Number(prompt("Enter a number(condition): "))
y = Number(prompt("Enter a number(condition): "))
password = Number(prompt("Enter password(check password match): "))
student_score = password = Number(prompt("Enter student score: "))
attendance = password = Number(prompt("Enter student attendance: "))


if (number%2 == 0){
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}


if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} is greater than ${num1}`)
}


if (String(year).endsWith("00") && year % 400){
    console.log(`${year} is a leap year`)
} else if(year % 4 && year % 100 != 0){
    console.log(`${year} is a leap year`)
}


if (temp > 30){
    console.log("The temperature is too high.")
} else if (temp > 15 && temp <= 30){
    console.log("Normal temperature.")
} else if (temp < 15) {
    console.log("Cold temperature.")
}


if (x >= 10 && x <= 20 || y > 100) {
    console.log("Conditions met.")
} else {
    console.log("Conditions not met")
}


secret_password = "secret123"
if (password == secret_password) { console.log("Access") } else {console.log("Access denied")}


if (student_score > 90){
    if (attendance > 80){
        console.log("Excellent student.")
    } else {
        console.log("Good score, but attendance needs improvement.")
    }
} else {
    console.log("Try again next time.")
}

