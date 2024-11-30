

// function myMenuFunction() {
//     var i = document.getElementById("navMenu");
//     if (i.className === "nav-menu") {
//         i.className += " responsive";
//     } else {
//         i.className = "nav-menu";
//     }
// }


// var a = document.getElementById("loginBtn");
// var b = document.getElementById("registerBtn");
// var x = document.getElementById("login");
// var y = document.getElementById("register");
// function login() {
//     x.style.left = "4px";
//     y.style.right = "-520px";
//     a.className += " white-btn";
//     b.className = "btn";
//     x.style.opacity = 1;
//     y.style.opacity = 0;
// }
// function register() {
//     x.style.left = "-510px";
//     y.style.right = "5px";
//     a.className = "btn";
//     b.className += " white-btn";
//     x.style.opacity = 0;
//     y.style.opacity = 1;
// }

function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function showPassLogin() {
    var passwordField = document.getElementById("inputLoginPass");
    var eyeIcon = document.getElementById("eyeIconLogin");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("bx-show");
        eyeIcon.classList.add("bx-hide");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("bx-hide");
        eyeIcon.classList.add("bx-show");
    }
}


function showPass() {
    var passwordField = document.getElementById("userPasswordInput");
    var eyeIcon = document.getElementById("eyeIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("bx-show");
        eyeIcon.classList.add("bx-hide");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("bx-hide");
        eyeIcon.classList.add("bx-show");
    }
}


function signUpData() {
    var firstName = document.getElementById("userNameInput").value;
    var lastName = document.getElementById("userLastNameInput").value;
    var email = document.getElementById("userEmailInput").value;
    var password = document.getElementById("userPasswordInput").value;


    if (!firstName || !lastName || !email || !password) {
        alert("Please fill in all fields!");
        return;
    }


    alert("Sign up successful!");
}


function logIn() {
    var loginEmail = document.getElementById("inputLoginEmail").value;
    var loginPassword = document.getElementById("inputLoginPass").value;

    if (!loginEmail || !loginPassword) {
        alert("Please enter both email and password!");
        return;
    }

    alert("Login successful!");
}
function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("responsive");
}
