/*
function storeNgoInfo(event) {
    event.preventDefault(); 

    const name = document.getElementById("ngoName").value.trim();
    const regNo = document.getElementById("regNo").value.trim();
    const address = document.getElementById("address").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const website = document.getElementById("website").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

   
    if (name.length < 3 || /\d/.test(name)) {
        alert("NGO Name must be at least 3 characters long and contain no numbers.");
        return;
    }

    
    if (regNo.length === 0) {
        alert("Registration Number cannot be empty.");
        return;
    }

    
    if (address.length < 10) {
        alert("Address must be at least 10 characters long.");
        return;
    }

    
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(contact)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please confirm your password correctly.");
        return;
    }

    
    if (website && !/^https?:\/\/[^\s]+$/.test(website)) {
        alert("Please enter a valid URL for the website.");
        return;
    }
    alert("NGO Information stored successfully!");
    document.querySelector("form").reset();
    window.location.href = 'ngoINFO1 additional.html';
}*/
function storeNgoInfo(event) {
    event.preventDefault(); 

    const name = document.getElementById("ngoName").value.trim();
    const regNo = document.getElementById("regNo").value.trim();
    const address = document.getElementById("address").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const website = document.getElementById("website").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // NGO name validation with numeric-only check
    if (name.length < 3 || /\d/.test(name) || /^\d+$/.test(name)) {
        alert("NGO Name must be at least 3 characters long, contain no numbers, and cannot be numeric only.");
        return;
    }

    if (regNo.length === 0) {
        alert("Registration Number cannot be empty.");
        return;
    }

    if (address.length < 10) {
        alert("Address must be at least 10 characters long.");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(contact)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please confirm your password correctly.");
        return;
    }

    if (website && !/^https?:\/\/[^\s]+$/.test(website)) {
        alert("Please enter a valid URL for the website.");
        return;
    }

    alert("NGO Information stored successfully!");
    document.querySelector("form").reset();
    window.location.href = 'ngoINFO1 additional.html';
}
