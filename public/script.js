// Smooth scroll per anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Inizializza EmailJS e gestisci i form di contatto
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('JTUoYM8OyA2taYaBp'); // Sostituisci con il tuo USER_ID

    // --- FORM PRINCIPALE (index.html) ---
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    if (form && messageDiv) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Controlla autenticazione SOLO qui
            const user = firebase.auth().currentUser;
            if (!user) {
                window.location.href = "login.html";
                return;
            }

            emailjs.sendForm('service_ogm32rj', 'template_kn8f6zq', this)
                .then(function () {
                    messageDiv.textContent = 'Messaggio inviato con successo!';
                    messageDiv.classList.remove('fade-out');
                    form.reset();
                    setTimeout(() => {
                        messageDiv.classList.add('fade-out');
                    }, 3000);
                    setTimeout(() => {
                        messageDiv.textContent = "";
                        messageDiv.classList.remove('fade-out');
                    }, 3800);
                }, function (error) {
                    messageDiv.textContent = 'Errore nell\'invio. Riprova.';
                    messageDiv.classList.remove('fade-out');
                    setTimeout(() => {
                        messageDiv.classList.add('fade-out');
                    }, 3000);
                    setTimeout(() => {
                        messageDiv.textContent = "";
                        messageDiv.classList.remove('fade-out');
                    }, 3800);
                });
        });
    }

    // --- FORM DEVELOPER (contatta-dev.html) ---
    const devForm = document.getElementById('dev-contact-form-strano');
    const devMessageDiv = document.getElementById('dev-form-message-strano');

    if (devForm && devMessageDiv) {
        devForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Controlla autenticazione SOLO qui
            const user = firebase.auth().currentUser;
            if (!user) {
                window.location.href = "login.html";
                return;
            }

            emailjs.sendForm('service_ogm32rj', 'template_kn8f6zq', this)
                .then(function () {
                    devMessageDiv.textContent = "Messaggio inviato! Ti risponderò al più presto.";
                    devMessageDiv.classList.remove('fade-out');
                    devForm.reset();
                    setTimeout(() => {
                        devMessageDiv.classList.add('fade-out');
                    }, 3000);
                    setTimeout(() => {
                        devMessageDiv.textContent = "";
                        devMessageDiv.classList.remove('fade-out');
                    }, 3800);
                }, function (error) {
                    devMessageDiv.textContent = "Errore nell'invio. Riprova più tardi.";
                    devMessageDiv.classList.remove('fade-out');
                    setTimeout(() => {
                        devMessageDiv.classList.add('fade-out');
                    }, 3000);
                    setTimeout(() => {
                        devMessageDiv.textContent = "";
                        devMessageDiv.classList.remove('fade-out');
                    }, 3800);
                });
        });
    }
});

let isLoggedIn = false;

firebase.auth().onAuthStateChanged(function (user) {
    isLoggedIn = !!user;
});

const profileIcon = document.getElementById('profile-icon');
const profileMenu = document.getElementById('profile-menu');

if (profileIcon) {
    profileIcon.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();


        if (!isLoggedIn) {
            window.location.href = "login.html";
            return;
        }

        if (profileMenu) {
            profileMenu.classList.toggle('show');
        }
    });

    document.addEventListener('click', function (e) {
        if (profileMenu && !profileIcon.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('show');
        }
    });
}



// Nscondi tasto accedi//
firebase.auth().onAuthStateChanged(function (user) {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        if (user) {
            loginBtn.style.display = "none";
        } else {
            loginBtn.style.display = "";
        }
    }
});


