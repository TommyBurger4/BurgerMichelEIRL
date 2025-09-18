document.addEventListener('DOMContentLoaded', function() {
    // Configuration Web3Forms - GRATUIT et ILLIMITÉ
    const WEB3FORMS_ACCESS_KEY = "VOTRE_CLE_ACCESS_ICI"; // À obtenir sur https://web3forms.com
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';

            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(6px)' : '';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(-6px)' : '';
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            });
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                projectType: document.getElementById('projectType').value,
                budget: document.getElementById('budget').value,
                timeline: document.getElementById('timeline').value,
                description: document.getElementById('description').value,
                expectations: document.getElementById('expectations').value
            };

            // Sauvegarder les données localement
            const saveToLocalStorage = () => {
                const existingData = JSON.parse(localStorage.getItem('mb_demandes') || '[]');
                const newEntry = {
                    ...formData,
                    date: new Date().toLocaleString('fr-FR'),
                    id: Date.now()
                };
                existingData.push(newEntry);
                localStorage.setItem('mb_demandes', JSON.stringify(existingData));
                console.log('Demande sauvegardée localement:', newEntry);
            };

            // Préparer les données pour Web3Forms
            const web3FormsData = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `Nouvelle demande de ${formData.name} - MB Construction`,
                from_name: formData.name,
                email: formData.email,
                to: "nellpatouparvedy@gmail.com",
                message: `
NOUVELLE DEMANDE DE PROJET

INFORMATIONS CLIENT:
====================
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}

DÉTAILS DU PROJET:
==================
Type de projet: ${formData.projectType}
Budget estimé: ${formData.budget || 'Non spécifié'}
Délai souhaité: ${formData.timeline || 'Non spécifié'}

DESCRIPTION DU PROJET:
======================
${formData.description}

ATTENTES DU CLIENT:
===================
${formData.expectations}

---
Message envoyé depuis le site MB Construction
Date: ${new Date().toLocaleString('fr-FR')}
                `
            };

            // Envoyer via Web3Forms (GRATUIT et ILLIMITÉ)
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(web3FormsData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Email envoyé avec succès via Web3Forms!');
                    saveToLocalStorage();

                    // Afficher le message de succès
                    contactForm.style.display = 'none';
                    successMessage.style.display = 'block';

                    // Réinitialiser le formulaire
                    contactForm.reset();

                    // Masquer le message après 5 secondes
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                        contactForm.style.display = 'grid';
                    }, 5000);
                } else {
                    console.error('Erreur Web3Forms:', data);
                    saveToLocalStorage();
                    alert('Une erreur est survenue. Votre demande a été sauvegardée et nous vous contacterons bientôt.');
                }
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi:', error);
                saveToLocalStorage();
                alert('Erreur de connexion. Votre demande a été sauvegardée localement.');
            });
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .feature, .project-card, .value-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Créer le bouton scroll to top
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollButton);

    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    // Scroll vers le haut au clic
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});