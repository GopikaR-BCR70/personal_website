function validate() {
    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    var isValid = true;

    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
  

    // Name validation
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone number validation (only digits and length check)
    var phonePattern = /^[0-9]{10}$/;
    if (phone == "" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Subject validation
    if (subject == "") {
        document.getElementById("subjectError").innerHTML = "Please enter a subject.";
        isValid = false;
    }

    // Message validation
    if (message == "") {
        document.getElementById("messageError").innerHTML = "Please enter your message.";
        isValid = false;
    }

    return isValid; // Only submit the form if all validation passed
}


// send email 

function sendMail(){
    let parms ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message:document.getElementById('message').value
    }
    emailjs.send("service_p2wr2yp","template_gowqgm4",parms).then(alert("Email Sent!!"));
}

