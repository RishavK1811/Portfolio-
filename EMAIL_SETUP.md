(function(){
  emailjs.init("9RELraKgnALzG9l1o");
})();

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    to_email: "rishavkumar181101@gmail.com"
  };

  emailjs.send("service_1909tnv", "template_9wncnjx", templateParams)
    .then(function(response) {
      alert("Message sent successfully 🔥");
      document.querySelector("form").reset(); // form clear ho jayega
    })
    .catch(function(error) {
      alert("Failed to send ❌: " + JSON.stringify(error));
    });
});
