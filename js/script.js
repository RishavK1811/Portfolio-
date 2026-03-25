// Navbar scroll effect
console.log("JS RUNNING");
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
});

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});


// 🔥 EMAILJS + POPUP PART

// Initialize EmailJS
emailjs.init('9RELraKgnALzG9l1o');

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

// Form submit
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const templateParams = {
        to_email: 'rishavkumar181101@gmail.com',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_1909tnv', 'template_9wncnjx', templateParams)
        .then(() => {
            showPopup("Message sent successfully ✅");
            document.querySelector('form').reset();
        })
        .catch((error) => {
            showPopup("Failed to send ❌", true);
            console.log(error);
        });
});
