/* Opdracht 3:

We gaan de changeColor functie veranderen zodat de achtergrondkleur ook weer terug veranderd naar rood wanneer er op de knop wordt geklikt.
De achtergrondkleur wordt dan "getoggeld" , met andere woorden: erop gezet en er weer afgehaald en er weer opgezet, etc.
Verander de naam van de functie van changeColor naar toggleColor
In plaats van het toevoegen van een extra class "red-background" aan de classlist gaan we de class togglen.
Gebruik Google om erachter te komen hoe je dit doet. Hint: toggle.
*/

const attachEventToAlertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("Hello World!");
    });
};

const toggleColor = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        toggleColor();
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();
