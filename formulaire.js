document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire
    const form = document.querySelector('form');

    // Ajoutez un écouteur d'événements pour l'événement submit du formulaire
    form.addEventListener('submit', function (event) {
        // Empêchez le formulaire de se soumettre par défaut
        event.preventDefault();

        // Vérifiez si tous les champs sont remplis
        const inputs = form.querySelectorAll('input, textarea');
        let allFieldsFilled = true;
        inputs.forEach(function (input) {
            if (input.value.trim() === '') {
                allFieldsFilled = false;
            }
        });

        // Si un ou plusieurs champs sont vides, affichez un message d'alerte
        if (!allFieldsFilled) {
            alert('Veuillez remplir l\'ensemble des champs');
        } else {
            // Si tous les champs sont renseignés, affichez leurs valeurs dans la console du navigateur
            inputs.forEach(function (input) {
                console.log(input.name + ': ' + input.value);
            });
        }
    });
});
