let username = document.getElementById("fname");
username.addEventListener("input", function(){
    let nameValue = username.value;

document.getElementById("greeting").innerHTML =
 `Hello ${nameValue}, welcome!`;

});

