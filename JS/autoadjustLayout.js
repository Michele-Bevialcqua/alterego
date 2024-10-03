
document.addEventListener("DOMContentLoaded", () => {
    const peopleYouMayKnowDiv = document.getElementById('people_you_may_know');
    const feedDiv = document.getElementById('feed');
    const pageBody = document.getElementById('mobileBody')

    // Funzione per caricare il contenuto di PeopleYouMayKnow.html
    function loadPeopleYouMayKnow() {
        fetch(`people you may know.html`) // Assicurati che il percorso sia corretto
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nel caricamento del file');
                }
                return response.text();
            })
            .then(htmlContent => {
                peopleYouMayKnowDiv.innerHTML = htmlContent; 
                adjustLayout(); 
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    }

    // Funzione per regolare il layout in base alle dimensioni dello schermo
    function adjustLayout() {
        if (window.innerWidth < 768) {
            pageBody.style.height = '100vh'; // Se la larghezza della finestra è inferiore a 768px
            peopleYouMayKnowDiv.style.display = 'none'; // Nasconde il div laterale
            feedDiv.style.width = '100vw'; // Il feed occupa l'intera larghezza dello schermo
            feedDiv.style.marginLeft = '0'; // Il feed occupa l'intera larghezza dello schermo
            feedDiv.style.marginRight = '0'; // Il feed occupa l'intera larghezza dello schermo
        } else {
            pageBody.style.height = 'auto'; // Se la larghezza della finestra è maggiore o uguale a 768px
            peopleYouMayKnowDiv.style.display = 'block'; // Mostra il div laterale
            peopleYouMayKnowDiv.style.float = 'left';
            feedDiv.style.width = '40vw';
            feedDiv.style.marginLeft = '30vw'; // Il feed occupa il 40% della larghezza dello schermo
        }
    }

    // Carica il contenuto del file e imposta il layout iniziale
    loadPeopleYouMayKnow();
    adjustLayout();
    
    // Aggiorna il layout quando la finestra cambia dimensione
    window.addEventListener('resize', adjustLayout);
});