/* OUDE STIJL: LOOPS

Loops kun je voor meer gebruiken dan itereren over een lijst van dingen.
Maar we hebben het nu wel over die manier van loops gebruiken.

While loop:

Maak en nieuwe map en nieuwe javascript file.
Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.

For loop:

Gebruik dezelfde array als startpunt.
Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
Gebruik de lengte van de array in je for loop: array.length
*/

const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}



const myColors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (x in myColors) {
  console.log(myColors[x]);
}

