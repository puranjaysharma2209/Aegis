const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = registerForm.elements["name"].value;
    const email = registerForm.elements["email"].value;
    const password = registerForm.elements["password"].value;
    console.log(name)
    if (name === '' || email === '' || password=== ''){
        alert('All fields required to create an account')
    }
    else{
        alert("Account creation successful. You will receive your credentials on the registered email ID")
        window.location.href = "index.html";
    }
    
});

