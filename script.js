function calcul() {
    //Récupération des input
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;

    //Calcul
    function operation() {
        let result = poids / (taille*taille);
        let res = Math.round(result * 100) / 100;
        let resultDiv = document.getElementById("resultat");

        if (taille === "" || poids === "") {
            alert("Veuillez compléter tous les champs.");
        } else {
            let resultDisplay = document.createElement("h2");
            resultDisplay.textContent = `Votre IMC est de ${res}!`;
            resultDiv.appendChild(resultDisplay);

            //Appel de la fonction d'indication selon IMC, après le calcul
            advice();
        }

        //Indication en fonction de l'IMC de l'utilisateur
        function advice() {
            let advice = document.createElement("h2");
            
            //Utilisation d'un tableau pour stocker les indications: de cette manière, ça rend les conditions beaucoup plus lisibles
            let adviceArray = ["Vous êtes en insuffisance pondérale! Changez vos habitudes alimentaires et consultez un professionnel de santé.", "Vous avez une corpulence normale!", "Vous êtes en surpoids! Faites preuve de prudence.", "Vous êtes en obésité modérée! N'oubliez pas de pratiquer une activité physique régulière afin d'améliorer votre état de santé.", "Vous êtes en obésité sévère! Changez d'urgence vos habitudes alimentaires!", "Vous êtes en obésité morbide! Consultez d'urgence un professionnel de santé, vous présentez de forts risques de problèmes de santé!"];

            if (res < 18.5) {
                advice.textContent = adviceArray[0];
            } else if (res >= 18.5 && res <= 25) {
                advice.textContent = adviceArray[1];
            } else if (res >= 25 && res <= 30) {
                advice.textContent = adviceArray[2];
            } else if (res >= 30 && res <= 35) {
                advice.textContent = adviceArray[3];
            } else if (res >= 35 && res <= 40) {
                advice.textContent = adviceArray[4];
            } else if (res > 40) {
                advice.textContent = adviceArray[5];
            }

            //Création d'un bouton de rechargement de la page
            let reloadButton = document.createElement("button");
            reloadButton.textContent = "Nouveau Calcul";

            resultDiv.appendChild(advice);
            resultDiv.appendChild(reloadButton);

            //Event listener
            reloadButton.addEventListener("click", reload);
        }

    }

    //Fonction de rechargement de la page appelée par le bouton reloadButton
    function reload() {
        window.location.reload();
    }

    operation();
}

//Récupération du bouton
let calculateButton = document.getElementById("submit-button");

//Event listener
calculateButton.addEventListener("click", calcul);