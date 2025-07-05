document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").onsubmit = function (e) {
        e.preventDefault(); 
       
        const logo = document.getElementById("logo").files[0];
        const govtRegNo = document.getElementById("govtRegNo").value.trim();
        const taxId = document.getElementById("taxId").value.trim();
        const otherDocs = document.getElementById("otherDocs").files[0];
        const mission = document.getElementById("mission").value.trim();
        const description = document.getElementById("discription").value.trim();

        
        const regNoPattern = /^[A-Z0-9]{6,12}$/; 
        const taxIdPattern = /^[A-Z0-9]{10,15}$/; 
        const missionMaxLength = 200;
        const descriptionMaxLength = 1000;

        
        const logoMaxSize = 5 * 1024 * 1024; // 5 MB
        const docsMaxSize = 10 * 1024 * 1024; // 10 MB

       
        if (!logo || logo.size > logoMaxSize || !/\.(jpg|jpeg|png|gif)$/i.test(logo.name)) {
            alert("Please upload a valid logo file (JPG, PNG, GIF) under 5 MB.");
            return;
        }

        if (!regNoPattern.test(govtRegNo)) {
            alert("Government Registration Number must be 6-12 alphanumeric characters.");
            return;
        }

        if (!taxIdPattern.test(taxId)) {
            alert("Tax Identification Number (TIN) must be 10-15 alphanumeric characters.");
            return;
        }

        if (otherDocs && otherDocs.size > docsMaxSize) {
            alert("Additional documents must be under 10 MB.");
            return;
        }

        if (mission.length > missionMaxLength) {
            alert("Mission statement must be under 200 characters.");
            return;
        }

        if (description.length > descriptionMaxLength) {
            alert("Description must be under 1000 characters.");
            return;
        }
        localStorage.setItem('bigdescription',description );
        alert("Validation successful! Submitting form...");
        window.location.href = 'ngo interface.html';
    };
});

