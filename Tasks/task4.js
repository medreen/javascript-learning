let userEmail = prompt("Enter email: ")
let message
function validateEmail(email){
    if (email.includes("@") && email.includes(".")){

        if (email.indexOf("@") > 0 && email.indexOf(".") < email.length - 1){

            if (email.lastIndexOf(".") < email.length - 1) {

                message = `${email} is valid.`
            }
        }
    } else {
        message = `${email} is not valid`
    }
    return message
}

let email = validateEmail(userEmail);
console.log(email)
