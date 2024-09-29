
const loginForm = document.getElementById("Purchase-Form");
const loginButton = document.getElementById("Purchase");
const loginErrorMsg = document.getElementById("login-error-msg");

Purchase.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.Full_Name.value;
    const Adress = loginForm.Adress.value;
    if(username!="" & Adress!="")
        {
    alert("Thank You For Your Purchase, Clicking Ok will return you to the home page");
    window.location.href="index.html";
        }
        else {
        
            loginErrorMsg.style.opacity = 1;
        }
})