const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const emailInput = loginForm.elements["email"].value;
    const password = loginForm.elements["password"].value;

    if (emailInput === '' && password===''){
        alert('Please enter your credentials')
        return
    }
    if (emailInput === 'admin' && password === 'admin') 
    {
        window.location.href = "webpages/dashboard.html";
    }
    else {
        alert("Invalid credentials, please enter again");
        loginForm.elements["email"].value = '';
        loginForm.elements["password"].value = '';
    }
});

