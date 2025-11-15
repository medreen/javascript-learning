let number = 90

if (number%2 == 0){
    console.log(`${number} is odd`)
} else {
    console.log(`${number} is odd`)
}

num1 = 89
num2 = 78

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} is greater than ${num1}`)
}

year = 1900

if (String(year).endsWith("00") && year % 400){
    console.log(`${year} is a leap year`)
} else if(year % 4 && year % 100 != 0){
    console.log(`${year} is a leap year`)
}

temp = 34

if (temp > 30){
    console.log("The temperature is too high.")
} else if (temp > 15 && temp <= 30){
    console.log("Normal temperature.")
} else if (temp < 15) {
    console.log("Cold temperature.")
}

x = 12
y = 18

if (x >= 10 && x <= 20 || y > 100) {
    console.log("Conditions met.")
} else {
    console.log("Conditions not met")
}


password = "nme"
secret_password = "secret123"

if (password == secret_password) { console.log("Access") } else {console.log("Access denied")}

student_score = 89
attendance = 78

if (student_score > 90){
    if (attendance > 80){
        console.log("Excellent student.")
    } else {
        console.log("Good score, but attendance needs improvement.")
    }
} else {
    console.log("Try again next time.")
}

