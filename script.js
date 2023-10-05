
function sendEmail(){
    Email.send({
        Host : "smtp.gmail..com",
        Username : "abeywardana21@gmail.com",
        Password : "password",
        To : 'abeywardana21@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert("Message sent successfully!")
    );
}