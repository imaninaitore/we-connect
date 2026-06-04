let username = document.getElementById("fname");
username.addEventListener("input", function(){
    let nameValue = username.value;

document.getElementById("greeting").innerHTML =
 `Hello ${nameValue}, welcome!`;

});

let dobInput = document.getElementById("dob");

dobInput.addEventListener("change", function(){

    let birthDate = new Date(dobInput.value);

    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();

    let months = today.getMonth() - birthDate.getMonth();

    let totalMonths = (years * 12) + months;

    document.getElementById("months-result").innerHTML =
    `You are approximately ${totalMonths} months old.`;

});