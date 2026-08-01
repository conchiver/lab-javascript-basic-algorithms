// Bonus 1: Texto largo

const ipsumParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Et dolor et amet.";
const ipsumParagraph2 = " Aparece la palabra latina latina.";
const ipsumParagraph3= "Lorem ipsum.";

let longText = "";
let contpalabra =0;
let contadoret=0;
let i=0;
let j=0;

palabrabuscada="Lorem";

longText += ipsumParagraph + " " + ipsumParagraph2 + " " + ipsumParagraph3;

console.log(longText);

if (longText !== ""){
    for(let i=0; i<longText.length; i++){
        if (longText[i] === " ") contpalabra++;
    }
}
console.log(" el texto tiene: " , contpalabra + 1, "palabras");

//con método split 
contpalabras = longText.split(" ").length;

console.log("palabras que contiene el texto usando split", contpalabras, "palabras");

// inicalizo la variable pos con lo que me devuelve indexOf() 
//indexOf() devuelve la pos donde se encuentra la palabra buscada 
//si no la encuentra devuelve -1

let pos=longText.indexOf(palabrabuscada);

while (pos !== -1){
    contadoret++;
    pos = longText.indexOf(palabrabuscada, pos + palabrabuscada.length);
}
    

console.log("numero de veces que aparece la palabra", palabrabuscada, contadoret);
