
function sendEmail(){
    Email.send({
        Host : "smtp.gmail..com",
        Username : "abeywardana21@gmail.com",
        Password : "password",
        To : 'abeywardana21@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name: " + document.getElementById("name").value
               + " <br> Email: " + document.getElementById("email").value
               + " <br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully!")
    );
}