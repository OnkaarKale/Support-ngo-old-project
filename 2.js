
document.addEventListener("DOMContentLoaded", function () {
    function validateEmailAndPassword(email, password) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (password.length < 6 || password.length > 15) {
            alert("Password must be between 6 and 15 characters.");
            return false;
        }

        return true; 
    }

    
    document.querySelector("#userLogin form").onsubmit = function (e) {
        e.preventDefault(); 
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (validateEmailAndPassword(email, password)) {
            
            window.location.href = 'home.html';
        }
    };

    
    document.querySelector("#ngoLogin form").onsubmit = function (e) {
        e.preventDefault(); 

        const ngoEmail = document.getElementById("ngoEmail").value.trim();
        const ngoPassword = document.getElementById("ngoPassword").value;

        if (validateEmailAndPassword(ngoEmail, ngoPassword)) {
            
            window.location.href = 'ngo interface.html';
        }
    };
});

