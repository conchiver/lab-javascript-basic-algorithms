// Bonus 2: Palíndromo

const phraseToCheck = "A man, a plan, a canal, Panama!";

let cadenasinespacios="";
let i=0;

let j=0;
let posiblepalindromo="";

/* quitar todos los espacios y otros caracteres*/
/* i recorre la cadena phrasetoCheck y la j para la posicion en la cadena sin espacios*/
while ( i<phraseToCheck.length ){
    if (
    (phraseToCheck[i] >= "A" && phraseToCheck[i] <= "Z") ||
    (phraseToCheck[i] >= "a" && phraseToCheck[i] <= "z")
    )   {
            cadenasinespacios += phraseToCheck[i];
            
        }
    
        i++;
} 

//console.log(cadenasinespacios);


/* la convierto a minusculas*/
posiblepalindromo = cadenasinespacios.toLowerCase();

let posfinal= cadenasinespacios.length-1;
let posinicial= 0;


let palindromo = true;


while (palindromo && posinicial<posfinal ){
    
    if (posiblepalindromo[posinicial]!==posiblepalindromo[posfinal]){
        palindromo=false;

    }
    else {
        posinicial++;
        posfinal--;
    }
}

if (palindromo){
    console.log("La frase es palindromo ", phraseToCheck);
} else {
    console.log("La frase no es palindromo ", phraseToCheck);
}
