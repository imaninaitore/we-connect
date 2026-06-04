//personalized greeting
let username = document.getElementById("fname");
username.addEventListener("input", function(){
    let nameValue = username.value;

document.getElementById("greeting").innerHTML =
 `Hello ${nameValue}, welcome!`;

});

//month calculation
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

//loop
for(let i = 1; i <= 5; i++){

    document.getElementById("loop-quotes").innerHTML +=
    "<p>Believe in yourself!</p>";

}

//local storGE SAVING
let userAge = document.getElementById("dob");

let saveButton = document.getElementById("submit-save");


saveButton.addEventListener("click", function(){

    localStorage.setItem("name", username.value);

    localStorage.setItem("age", userAge.value);

});


let savedName = localStorage.getItem("name");

let savedAge = localStorage.getItem("age");


document.getElementById("saved-data").innerHTML =
`Welcome back ${savedName}. You are born in ${savedAge}`;