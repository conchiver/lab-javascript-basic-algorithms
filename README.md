# LAB | JS Basic Algorithms

## Introducción

Este laboratorio contiene ejercicios de JavaScript básico organizados en archivos independientes. Cada iteración se ejecuta con Node.

## Estructura de archivos

- `ex1.js` - Iteración 1: nombres y entrada
- `ex2.js` - Iteración 2: condicionales
- `ex3.js` - Iteración 3: bucles
- `exbonus-1.js` - Bonus 1: contar palabras y "et"
- `exbonus-2.js` - Bonus 2: palíndromo

## Cómo ejecutar

Usa Node para ejecutar cada ejercicio desde la línea de comandos:

```bash
node ex1.js
node ex2.js
node ex3.js
node exbonus-1.js
node exbonus-2.js
```

### ex1.js — Nombres y entrada

#### Resultado esperado

Terminal (simulación):

```bash
C:\ruta\del\proyecto> node ex1.js
```

Salida que debería ver en la terminal (si el ejercicio está bien resuelto):

```
Driver
Navigator
```

#### Pista (fragmento de código)

```js
// ejemplo: mostrar el valor de una variable
console.log(hacker1);
console.log(hacker2);
```

---

### ex2.js — Condicionales

#### Resultado esperado

Terminal (simulación):

```bash
C:\ruta\del\proyecto> node ex2.js
```

Salida que debería ver en la terminal (con los valores de setup actuales):

```
El navigator tiene el nombre más largo.
```

> Nota: el texto exacto puede variar si se decide otro mensaje, pero debe indicar cuál nombre es más largo o que tienen la misma longitud.

#### Pista (fragmento de código)

```js
if (hacker1.length > hacker2.length) {
  console.log("El driver tiene el nombre más largo.");
} else if (hacker1.length < hacker2.length) {
  console.log("El navigator tiene el nombre más largo.");
} else {
  console.log("Ambos nombres tienen la misma longitud.");
}
```

---

### ex3.js — Bucles y comparación

#### Resultado esperado

Terminal (simulación):

```bash
C:\ruta\del\proyecto> node ex3.js
```

Salida que debería ver en la terminal (con los valores de setup actuales):

```
D R I V E R
rotagivaN
El driver va primero.
```

Explicación breve de cada línea de salida:
- Primera línea: el nombre del driver en mayúsculas y separado por espacios.
- Segunda línea: el nombre del navigator al revés (respetando mayúsculas/minúsculas según el setup).
- Tercera línea: cuál nombre va primero en orden alfabético.

#### Pista (fragmento de código)

```js
// driver en mayúsculas y con espacios
console.log(hacker1.toUpperCase().split('').join(' '));

// navigator al revés
console.log(hacker2.split('').reverse().join(''));

// comparación alfabética
if (hacker1 < hacker2) console.log('El driver va primero.');
else if (hacker1 > hacker2) console.log('El navigator va primero.');
else console.log('Ambos nombres son iguales.');
```

---

### exbonus-1.js — Contar palabras y apariciones de "et"

#### Resultado esperado

Terminal (simulación):

```bash
C:\ruta\del\proyecto> node exbonus-1.js
```

Salida que debería ver en la terminal (con el `longText` del setup actual):

```
Número total de palabras: 40
Apariciones de "et": 2
```

(La cuenta de palabras puede variar según la forma exacta de tokenizar; aquí se muestra el resultado esperado si se usa un split por espacios simple y búsqueda case-insensitive para "et".)

#### Pista (fragmento de código)

```js
const words = longText.split(/\s+/);
console.log('Número total de palabras:', words.length);

// contar apariciones de 'et' (insensible a mayúsculas)
let count = 0;
for (let w of words) {
  if (w.replace(/[^a-zA-Z]/g, '').toLowerCase() === 'et') count++;
}
console.log('Apariciones de "et":', count);
```

---

### exbonus-2.js — Palíndromo

#### Resultado esperado

Terminal (simulación):

```bash
C:\ruta\del\proyecto> node exbonus-2.js
```

Salida que debería ver en la terminal (con la `phraseToCheck` del setup actual):

```
La frase es un palíndromo.
```

#### Pista (fragmento de código)

```js
// limpiar: dejar sólo letras y pasar a minúsculas
const clean = phraseToCheck.replace(/[^a-zA-Z]/g, '').toLowerCase();
const reversed = clean.split('').reverse().join('');
if (clean === reversed) console.log('La frase es un palíndromo.');
else console.log('La frase no es un palíndromo.');
```

---

> Cómo ejecutar
>
> Desde la terminal en la carpeta del proyecto, ejecutar:
>
> ```bash
> node ex1.js
> node ex2.js
> node ex3.js
> node exbonus-1.js
> node exbonus-2.js
> ```

> Consejo: todos los archivos de ejercicio contienen sólo el setup mínimo (declaración de variables). Completa la lógica dentro de cada archivo y ejecuta con Node para ver la salida.
