document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".donate-form form").onsubmit = function (e) {
        e.preventDefault();

        const name = document.getElementById("donor-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const donationAmount = document.getElementById("donation-amount").value;
        const ngoSelect = document.getElementById("ngo-select").value;

        if (ngoSelect === "") {
            alert("Please select an NGO to support.");
            return;
        }

        if (name.length < 2) {
            alert("Please enter a valid name.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (donationAmount <= 0) {
            alert("Donation amount should be more than zero.");
            return;
        }
        e.target.submit();
        alert("Thank you for your donation");
    };
});
