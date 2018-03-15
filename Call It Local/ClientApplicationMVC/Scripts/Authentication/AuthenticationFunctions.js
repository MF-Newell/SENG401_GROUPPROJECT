// To be completed by students in milestone 2
function validateLogIn() {
    if (logInForm.username.includes(";") || logInForm.password.includes(";") {
        return false;
    }
    return true;
}

function validateCreateAccountForm() {
    if (createAccountForm.username.includes(";") || createAccountForm.password.includes(";") ||
        createAccountForm.address.includes(";") || createAccountForm.phonenumber.includes(";") ||
        createAccountForm.email.includes(";")) {
        return false;
    }

    var re1 = /((\d{3})|(\(\d{3}\)))(\-{0,1}|\s{0,1})\d{3}(\-{0,1}|\s{0,1})\d{4}/
    if (!(createAccountForm.phonenumber.value.match(re1))) {
        return false;
    }

    var re2 = /\S+@\S+\.\S+/;
    if (!(createAccountForm.email.value.match(re2))) {
        return false;
    }
    return true;
}