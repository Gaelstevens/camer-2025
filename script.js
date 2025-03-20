
// Fonction pour le défilement des images
let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function showNextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, 5000);


/*
// Fonction pour le bouton "Lire plus"
document.querySelectorAll('.lire-plus').forEach(button => {
    button.addEventListener('click', () => {
        const contenuComplet = button.parentElement.nextElementSibling;
        contenuComplet.style.display = contenuComplet.style.display === 'none' ? 'block' : 'none';
        button.textContent = contenuComplet.style.display === 'none' ? 'Lire plus' : 'Lire moins';
    });
});

*/








/*

//commentaire 
// Fonction pour extraire le nom de l'e-mail
function extraireNom(email) {
    return email.split('@')[0]; // Retourne tout ce qui précède le "@"
}

// Fonction pour ajouter un commentaire à la liste
function ajouterCommentaire(email, texte) {
    const commentairesList = document.querySelector('.commentaires-list');
    const nouveauCommentaire = document.createElement('div');
    nouveauCommentaire.classList.add('commentaire');
    const nom = extraireNom(email); // Extrait le nom de l'e-mail
    nouveauCommentaire.innerHTML = `
        <p><strong>Nom:</strong> ${nom}</p>
        <p>${texte}</p>
    `;
    commentairesList.appendChild(nouveauCommentaire);
}





*/

// Gestion du formulaire
/*document.getElementById('form-commentaire').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la soumission classique du formulaire

    const email = document.getElementById('email_11').value;
    const commentaire = document.getElementById('commentaire').value;

    if (email && commentaire) {
        ajouterCommentaire(email, commentaire);
        document.getElementById('form-commentaire').reset(); // Réinitialise le formulaire
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});
*/







/*
// Animation de défilement des commentaires
const commentairesList = document.querySelector('.commentaires-list');
commentairesList.style.animationDuration = `${commentairesList.children.length * 5}s`; // Ajuste la durée en fonction du nombre de commentaires



.commentaires1-container:hover .commentaires1-list {
    animation-play-state: paused;
}



document.getElementById('revenir-arriere').addEventListener('click', function () {
    const commentairesList = document.querySelector('.commentaires-list');
    commentairesList.style.animationPlayState = 'paused'; // Met en pause le défilement
    commentairesList.scrollBy(-100, 0); // Fait défiler vers la gauche
});

*/






























