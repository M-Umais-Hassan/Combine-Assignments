document.getElementById("msg").style.display = "none";
var pass_valid = document.getElementById("password");
count = 0;

pass_valid.onclick = function() {
    document.getElementById("msg").style.display = "block";
}

pass_valid.onblur = function() {
    document.getElementById("msg").style.display = "none";
}

function checkName() {
    var name = document.regform.name.value;
    var letters = /^[A-Za-z ]+$/;
    if(name.length==0) {
        $("#name_error_msg").text('Enter name please');
        return true;
    }
    else if(name.length > 0 && name.length <= 4) {
        $("#name_error_msg").text('Name must be greater then 4 characters');
        return true;
    }
    else if(name.length > 0 && !name.match(letters)) {
        $("#name_error_msg").text('You can use only characters');
        return true;
    }
    else {
        $("#name_error_msg").text('');
        return false;
    }
}

function checkAge() {
    var age = document.regform.age.value;
    if(isNaN(age) || age < 15 || age > 70) {
        $("#age_error_msg").text('Please enter a age between 15 and 70');
        return true;
    }
    else {
        $("#age_error_msg").text('');
        return false;
    }
}

function checkPass(value) {
    var password = document.getElementsByClassName("password-check");
    var msg = document.getElementsByClassName("msg");
    count = 0;
    const lowercase = new RegExp('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const numeric = new RegExp('(?=.*[0-9])');
    const specialchar = new RegExp('(?=.*[!@#\$%\^&\*])');
    if(value.length > 8) {
        password[0].style.color = "green";
        count++;
    }
    else {
        password[0].style.color = "grey";
        count--;
    }
    if(uppercase.test(value)) {
        password[1].style.color = "green";
        count++;
    }
    else {
        password[1].style.color = "grey";
        count--;
    }
    if(lowercase.test(value)) {
        password[2].style.color = "green";
        count++;
    }
    else {
        password[2].style.color = "grey";
        count--;
    }
    if(numeric.test(value)) {
        password[3].style.color = "green";
        count++;
    }
    else {
        password[3].style.color = "grey";
        count--;
    }
    if(specialchar.test(value)) {
        password[4].style.color = "green";
        count++;
    }
    else {
        password[4].style.color = "grey";
        count--;
    }
}

function checkEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.regform.email.value;
    if(email.match(mailformat)) {
        $("#email_error_msg").text('');
        return false;
    }
    else {
        $("#email_error_msg").text('Please enter a valid email');
        return true;
    }
}

function checkNum() {
    var number = document.regform.number.value;
    var letters = /^[0-9]+$/;
    if(number.length != 12 || !(number.startsWith("923")) || !(number.match(letters))) {
        $("#number_error_msg").text('Please enter a valid number -> 923009999999');
        return true;
    }
    else {
        $("#number_error_msg").text('');
        return false;
    }
}

function checkURL() {
    var url = document.regform.url.value;
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(url)){
        $("#url_error_msg").text('');
        console.log("This is false")
        return false;
    }
    else{
        $("#url_error_msg").text('Enter a valid URL');
        console.log("This is true")
        return true;
    }
}

function lastCheck() {
    var date = document.regform.date.value;
    if (checkName()==false && checkAge()==false && count>=5 && checkEmail()==false && checkNum()==false && checkURL()==false && date!=""){
        alert("Form submitted successfully");
        document.regform.name.value = "";
        document.regform.age.value = "";
        document.regform.email.value = "";
        document.regform.password.value = "";
        document.regform.url.value = "";
        document.regform.number.value = "";
        document.regform.date.value = "";
        var password = document.getElementsByClassName("password-check");
        for(var i=0; i<5; i++) {
            password[i].style.color = "grey";
        }
    }
    else {
        alert("Error");
    }
}
