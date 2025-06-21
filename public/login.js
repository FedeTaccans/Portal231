document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('login-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.login_email.value.trim();
        const password = form.login_password.value.trim();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                messageDiv.textContent = "Login effettuato!";
                messageDiv.style.color = "#3ed598";
                // Esempio: reindirizza alla home
                setTimeout(() => window.location.href = "index.html", 1000);
            })
            .catch((error) => {
                messageDiv.textContent = "Email o password errati.";
                messageDiv.style.color = "red";
            });
    });
});



document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const input = document.querySelector(this.getAttribute('toggle'));
        if (input.type === "password") {
            input.type = "text";
            this.innerHTML = '<i class="ri-eye-line"></i>';
        } else {
            input.type = "password";
            this.innerHTML = '<i class="ri-eye-off-line"></i>';
        }
    });
});





