/*function storeUserRegistration() {
    
    let name =  document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("confirm password").value;
    let dob = document.getElementById("dob").value;
    let nationality = document.getElementById("nationality").value;
    let occupation = document.getElementById("occupation").value;
    let contact = document.getElementById("contact").value.trim();

    if (name.length < 3 || /\d/.test(name)) {
        alert("Full Name must be at least 3 characters long and contain no numbers.");
        return;
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6 || password.length > 15) {
        alert("Password must be between 6 and 15 characters.");
        return;
    }
    if (password!= password2) {
        alert("Confirm password is not equal !");
        return;
    }
    
   
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (isNaN(new Date(dob)) || age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert("Contact Number must be a 10-digit number.");
        return;
    }

   
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userDOB', dob);
    localStorage.setItem('userNationality', nationality);
    localStorage.setItem('userOccupation', occupation);
    localStorage.setItem('userContact', contact);

    alert("Sign up successful! You can now log in.");
    window.location.href = 'home.html'; 
    /*
            if (name && email && password && dob && nationality && occupation && contact) {
                // Store all registration data in localStorage
                localStorage.setItem('userName', name);
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userPassword', password);
                localStorage.setItem('userDOB', dob);
                localStorage.setItem('userNationality', nationality);
                localStorage.setItem('userOccupation', occupation);
                localStorage.setItem('userContact', contact);

                alert('Sign up successful! You can now log in.');
                window.location.href = 'user_login.html'; // Redirect to login page
            } else {
                alert('Please fill out all fields.');
            }
        }
}*/
function storeUserRegistration() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("confirm password").value; // Keep ID as it is
    let dob = document.getElementById("dob").value;
    let nationality = document.getElementById("nationality").value;
    let occupation = document.getElementById("occupation").value;
    let contact = document.getElementById("contact").value.trim();

    // Full name validation with numeric-only check
    if (name.length < 3 || /\d/.test(name) || /^\d+$/.test(name)) {
        alert("Full Name must be at least 3 characters long, contain no numbers, and cannot be numeric only.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6 || password.length > 15) {
        alert("Password must be between 6 and 15 characters.");
        return;
    }
    if (password !== password2) {
        alert("Confirm password does not match!");
        return;
    }

    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (isNaN(dobDate.getTime()) || age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert("Contact Number must be a 10-digit number.");
        return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password); // In production, hash passwords
    localStorage.setItem('userDOB', dob);
    localStorage.setItem('userNationality', nationality);
    localStorage.setItem('userOccupation', occupation);
    localStorage.setItem('userContact', contact);

    alert("Sign up successful! You can now log in.");
    window.location.href = 'home.html';
}

