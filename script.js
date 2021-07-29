
const form = document.getElementById('forms');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const mail = document.getElementById('mail');
const pass = document.getElementById('passvalue');

function validate(){
    const firstname = fname.value;
    const lastname  = lname.value;
    const email     = mail.value;
    const password  = pass.value;

    if(firstname.trim() ===""){
        displayerror('1','First Name cannot be empty');
        fname.style.border ="solid 2px hsl(0, 100%, 74%)";
    }
    else{
        removeerror('1');
        fname.style.border = "1px solid rgb(204, 203, 203)";
    }

    if (lastname.trim() === "") {
        displayerror('2', 'Last Name cannot be empty');
        lname.style.border = "solid 2px hsl(0, 100%, 74%)";
    }
    else{
        removeerror('2');
        lname.style.border = "1px solid rgb(204, 203, 203)";
    }

    if (email.trim() === "") {
        displayerror('3', 'Email is required');
        mail.style.border = "solid 2px hsl(0, 100%, 74%)";
    }
    else if(!validateEmail(email)){
        
        displayerror('3', 'Looks like this is not an email');
        mail.style.border = "solid 2px hsl(0, 100%, 74%)";
    }
    else{
        removeerror('3');
        mail.style.border = "1px solid rgb(204, 203, 203)";
    }

    if (password.trim() === "") {
        displayerror('4', 'Password cannot be empty');
        pass.style.border = "solid 2px hsl(0, 100%, 74%)";
    }
    else{
        removeerror('4');
        pass.style.border = "1px solid rgb(204, 203, 203)";
    }

}

function displayerror(id,message){
   const small = document.getElementById(id);
   small.innerText=message;
   small.style.opacity=1;
   const img = document.getElementById('img'+id);
   img.style.opacity=1;
}

function removeerror(id) {
    const small = document.getElementById(id);
    small.style.opacity = 0;
    const img = document.getElementById('img' + id);
    img.style.opacity = 0;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}