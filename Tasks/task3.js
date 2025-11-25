let phoneNumber = prompt("Enter phone number: ")


//0712345678 - 10
//0111239415 - 10
//254712345678 - 12
//+254712345678 - 13


let result
function checkPhone(phone_number){   
    if (phone_number.isNaN() !== true){
        result = `${phone_number} is not valid.`
    } else if (phone_number.length === 13 && phone_number.startsWith("+")){
        result = phone_number;
    } else if (phone_number.length === 10 && phone_number.startsWith("07") ===  true || phone_number.startsWith("01") === true) {    
        phone_number = "+254" + phone_number.slice(1)
        result = phone_number    
    } else if (phone_number.length === 12 && phone_number.startsWith("254") === true){
        phone_number = "+" + phone_number.slice(0)
        result = phone_number
    } else if (phone_number.length === 9 && phone_number.startsWith("7") === true || phone_number.startsWith("1") === true) {
        phone_number = "+254" + phone_number.slice(0)
        result = phone_number
    }
    return result
}

const phone = checkPhone(phoneNumber);
console.log(phone)

