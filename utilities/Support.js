
const loginForm = document.getElementById("Support-Form");
const loginButton = document.getElementById("Purchase");
const loginErrorMsg = document.getElementById("login-error-msg");

Purchase.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.Full_Name.value;
    const Adress = loginForm.Adress.value;
    if(username!="" )
        {
    alert("Thank You For Your Concern, we will get back to you with in 24 hours. Clicking Ok will return you to the home page");
    window.location.href="index.html";
        }
        else {
        
            loginErrorMsg.style.opacity = 1;
        }
})