// validation 
function validate(event) {
    event.preventDefault();  // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validation checks
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits)");
        return false;
    }

    if (subject === "") {
        alert("Please enter a subject");
        return false;
    }

    if (message === "") {
        alert("Please enter your message");
        return false;
    }
}


