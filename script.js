// ==========================================
// GESTION DES ÉVÉNEMENTS
// ==========================================

/*
    📝 POUR AJOUTER/MODIFIER/SUPPRIMER UN ÉVÉNEMENT :
    
    Modifiez simplement le tableau ci-dessous.
    
    Structure d'un événement :
    {
        id: 1,                                    // Un nombre unique
        title: "Nom de l'événement",             // Le titre
        date: "15 Avril 2025",                   // La date (format libre)
        location: "Lieu, Ville",                 // Le lieu
        description: "Description complète...",   // La description
        image: ""                                // URL d'une image (optionnel, laisser vide si pas d'image)
    }
    
    💡 EXEMPLES D'ACTIONS :
    
    - AJOUTER un événement : Copiez un bloc entre { }, collez-le après, et modifiez les infos
    - MODIFIER un événement : Changez directement les valeurs entre guillemets
    - SUPPRIMER un événement : Supprimez tout le bloc { ... }, (inclus la virgule)
*/

const events = [
    {
        id: 1,
        title: "Marché de Noël",
        date: "22 Novembre 2025",
        location: "Salle Oscar Méténier, Sancoins",
        description: "Plongez dans la magie de Noël à Sancoins : artisanat local, bourse aux trésors, gourmandises belges et ambiance festive vous attendent le 22 novembre 🎄✨",
        image: "./img/marché-de-noël.png"
    }
];

// ==========================================
// NAVIGATION
// ==========================================

// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navigation smooth scroll et active links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Fermer le menu mobile si ouvert
                navMenu.classList.remove('active');
                
                // Scroll vers la section
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Mettre à jour le lien actif
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Détection de la section active au scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// AFFICHAGE DES ÉVÉNEMENTS
// ==========================================

function displayEvents() {
    const eventsList = document.getElementById('eventsList');
    
    if (events.length === 0) {
        eventsList.innerHTML = '<p class="text-center" style="grid-column: 1/-1; color: var(--gray);">Aucun événement prévu pour le moment. Revenez bientôt !</p>';
        return;
    }
    
    eventsList.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-image" style="${event.image ? `background-image: url('${event.image}'); background-size: cover; background-position: center;` : ''}" 
                 ${event.image ? `onclick="openLightbox('${event.image}')"` : ''}>
            </div>
            <div class="event-content">
                <span class="event-date">📅 ${event.date}</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-location">📍 ${event.location}</p>
                <p class="event-description">${event.description}</p>
            </div>
        </div>
    `).join('');
}

// ==========================================
// LIGHTBOX POUR LES IMAGES
// ==========================================

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Réactiver le scroll du body
    document.body.style.overflow = 'auto';
}

// Fermer la lightbox avec le bouton
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

// Fermer la lightbox en cliquant en dehors de l'image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Fermer la lightbox avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ==========================================
// FAQ ACCORDION
// ==========================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Fermer tous les autres items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle l'item courant
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================

// Le formulaire utilise FormSubmit.co pour envoyer les emails
// Aucun code JavaScript nécessaire, tout est géré par le formulaire HTML
// L'utilisateur sera redirigé vers une page de confirmation après l'envoi

// ==========================================
// INITIALISATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    
    // Animation au scroll pour les cartes
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    setTimeout(() => {
        document.querySelectorAll('.event-card, .value-card, .info-item').forEach(el => {
            observer.observe(el);
        });
    }, 100);
});

// ==========================================
// GESTION DU SCROLL (Header shadow)
// ==========================================

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});