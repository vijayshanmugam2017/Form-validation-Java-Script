const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-check');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error
        // add error calss

        setErrorFor(username, 'Username cannot be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }
    
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Enter valid E-mail id');
    } else {
        setSuccessFor(email);
        
    }
    // if(emailValue === ''){
    //     setErrorFor(email,'Email cannot be blank');
    // } else if (!isEmail(emailVaue)) {
    //     setErrorFor(email,'Email is not valid');
    // } else{
    //     setSuccessFor(email);
    // }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else{
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Renter password');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2,'Password does no match');
    } 
    else{
        setSuccessFor(password2);
    }
}
    // Error Function 
function setErrorFor(input, message) {
    const formControl = input.parentElement;//.form-contrl
    const small = formControl.querySelector('small');

    //add error message

    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

    // Success Function
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test(email);
}

// cookie
okcookie=()=>{
    var a=document.getElementById('okay').value;
    alert(a);                 
}
setTimeout(function(){
    document.getElementById('cookies').classList.add('showing');
},7000);

function back(){
    document.getElementById('cookies').classList.remove('showing');
    alert('Thank you!');
}

//  Welcome Alert 
setTimeout(function () {
    alert('Welcome to our website');
},1500);