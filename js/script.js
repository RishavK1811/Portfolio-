window.onload = function () {

    emailjs.init("9RELRaKgnALzG9l1o");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_kzs7fpx", "template_dkhpyrp", this)
            .then(function () {
                alert("Message sent successfully ✅");
            })
            .catch(function (error) {
                alert("Failed ❌");
                console.log(error);
            });

        form.reset();
    });

};
