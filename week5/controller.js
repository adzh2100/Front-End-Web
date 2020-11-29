// JavaScript source code

function validateForm(formname) {
    let x = document.forms[formname]["email"].value;
    let password = document.forms[formname]["password"].value;
    let error = document.getElementById("errors");

    if (x == "") {
       error.innerHTML = "E-mail is required. \n";
        return false;
    }
    if (x.indexOf('@')<1) {
        error.innerHTML =  "E-mail must contain @. \n";
        return false;
    }
    if (x.lastIndexOf('.') <= x.indexOf('@')) {
        error.innerHTML =  "Domain-name incorrect. \n";
        return false;
    }
    if (x.length < 5) {
        error.innerHTML = "E-mail must contain at least 5 symbols. \n";
        return false;
    }
    if (password.length<6) {
        error.innerHTML =  "Password must contain at least 6 symbols. \n";
        return false;
    }
    let uppercase = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) uppercase = true;
    }
    if (uppercase === false) {
        error.innerHTML =  "Password must contain at least 1 uppercase symbol. \n";
        return false;
    }
    let number = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) == '1' || password.charAt(i) == '2' || password.charAt(i) == '3' || password.charAt(i) == '4' || password.charAt(i) == '5'
            || password.charAt(i) == '6' || password.charAt(i) == '7' || password.charAt(i) == '8' || password.charAt(i) == '9' || password.charAt(i) == '0') number = true;
    }
    if (number === false) {
        error.innerHTML =  "Password must contain at least 1 number. \n";
        return false;
    }
    let specialsymbol = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) == '!' || password.charAt(i) == '@' || password.charAt(i) == '#' || password.charAt(i) == '$' || password.charAt(i) == '%'
            || password.charAt(i) == '^' || password.charAt(i) == '&') specialsymbol = true;
    }
    if (specialsymbol === false) {
        error.innerHTML =  "Password must contain at least 1 special symbol. \n";
        return false;
    }
    alert("You have registered successfully! ");
    return true;
}

function pageRedirect(flag, errorCode = "", errorMessage = "") {
    if (flag===false) {
        alert(errorMessage);
        return;
    }
    window.location.replace("posts.html");
}
const register = (username, email, password, callback) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
        data.user.updateProfile({
            displayName: username
        }).then(function () {
            callback(true);
        }, function (error) {
            console.log(error);
        });
    }, (error) => {
        const errorCode = error.code;
        let errorMessage;

        // Here we analyze the code and set custom error message (in bulgarian) just for the sake of the exersice
        switch (errorCode) {
            case 'auth/weak-password':
                {
                    errorMessage = "Registration failed. Weak password.";
                    break;
                }
            case 'auth/email-already-in-use':
                {
                    errorMessage = "Registration failed. Email is already used.";
                    break;
                }
            case 'auth/invalid-email':
                {
                    errorMessage = "Registration failed. Email is not valid.";
                    break;
                }
            default:
                {
                    errorMessage = "Registration failed.";
                }
        }

        callback(false, errorCode, errorMessage);
    });
};

function other()
{
    let username = document.forms["register-form"]["username"].value;
    let email = document.forms["register-form"]["email"].value;
    let password = document.forms["register-form"]["password"].value;
    return register(username, email, password,pageRedirect);
}

