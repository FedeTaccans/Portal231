document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    const messageDiv = document.getElementById('register-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = form.reg_name.value.trim();
        const email = form.reg_email.value.trim();
        const password = form.reg_password.value.trim();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Aggiorna il profilo con il nome
                return userCredential.user.updateProfile({
                    displayName: nome
                });
            })
            .then(() => {
                messageDiv.textContent = "Registrazione avvenuta! Ora puoi accedere.";
                messageDiv.style.color = "#3ed598";
                form.reset();
            })
            .catch((error) => {
                messageDiv.textContent = error.message;
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