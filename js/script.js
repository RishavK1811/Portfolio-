document.addEventListener("DOMContentLoaded", function () {

    // EmailJS init
    emailjs.init("9RELraKgnALzG9l1o");

    // Popup function
    function showPopup(message, isError = false) {
        const popup = document.getElementById("popup");
        popup.innerText = message;

        popup.classList.remove("error");
        if (isError) popup.classList.add("error");

        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }

    // Form select
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const templateParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
            to_email: "rishavkumar181101@gmail.com"
        };

        emailjs.send("service_kzs7fpx", "template_dkhpyrp", templateParams)
            .then(function () {
                showPopup("Message sent successfully ✅");
                form.reset();
            })
            .catch(function (error) {
                showPopup("Failed to send ❌", true);
                console.log(error);
            });
    });

});
