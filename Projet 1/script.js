

// On crée une const pour sélectionne la balise "panel" dans html
const panels = document.querySelectorAll('.panel')

// On cherche CHAQUE "ForEach" panel lié à notre constante
panels.forEach(panel => {
    // On crée un évenement lorsque l'on 'click' sur les éléments de la liste des panels
    panel.addEventListener('click', () =>{
        removeActiveClasses() //=> pour activer la fonction du bas on doit la placer OBLIGATOIREMENT son non dans cette fonction
        // La panel sur laquelle on vas cliquer vas prendre les attributs de la classe active précedente
        panel.classList.add('active')
    })
})

// On crée une fonction pour désactiver la fonction active sur les précédantes images sélectionnés
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

