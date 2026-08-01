// Ejercicio 3: Bucles
const navigator = "John";
const driver="Alice";
let inversa="";
let espacios="";

// con split y join 
console.log("con split y join: ", navigator.split('').join(' ').toUpperCase());

// con for
for (let i=0; i<navigator.length; i++){
    espacios += navigator[i].toUpperCase() + " ";
    
}
console.log("haciendolo con for", espacios);


for (let i= navigator.length-1; i>=0; i--){
    inversa += navigator[i];
}
console.log("inversa de navigator: ", inversa);

if (navigator>driver){
    console.log("El nombre del driver va primero: ", driver );
}
else if(navigator < driver){
    console.log("El nombre del navigator va primero", navigator);
}
else {
    console.log("navigator y driver tienen el mismo nombre");
}



