
<h2>Objetivos de aprendizaje</h2>


Este ejercicio te permitirá practicar y aplicar los conceptos y técnicas aprendidos en clase.

Al finalizar este ejercicio, serás capaz de:

* Ejecutar código JavaScript desde tu IDE, utilizando un servidor local para cargarlo en el navegador.
* Declarar variables utilizando las palabras clave `const` y `let` y utilizarlas para almacenar valores.
* Asignar valores a variables utilizando operadores de asignación (`=`, `+=`, `-=`, etc.).
* Utilizar estructuras condicionales (`if`, `else if`, `else`) y operadores lógicos (AND, OR, NOT) para controlar el flujo del programa.
* Acceder y comparar caracteres de un string, así como obtener partes de un string y su longitud.
* Manipular strings utilizando métodos básicos como `toUpperCase()`, `toLowerCase()`, etc.
* Comparar valores utilizando operadores de comparación (`<`, `>`, `<=`, `>=`, `===`).
* Utilizar bucles `for` o `while` para recorrer strings en orden normal e inverso.

  <br>
  <hr>

<br>

## Ejecutar cada ejercicio
1. Abrimos un terminal
2. Ejecutamos (ex1.js es el nombre del fichero)

```bash
node ex1.js 
```

### ex1.js: Nombres y entrada de datos

1.1 Crea una variable `hacker1` con el nombre del driver. <br>
1.2 Muestra por consola el nombre del driver, por ejemplo: `El nombre del driver es John`.<br>
1.3 Crea una variable `hacker2` con el nombre del navigator.<br>
1.4 Muestra por consola el nombre del navigator, por ejemplo: `El nombre del navigator es Jane`.

Salida esperada (ejemplo):
```bash
El nombre del driver es John
El nombre del navigator es Jane
```

### ex2-js: Condicionales

2.1. Dependiendo de qué nombre [sea más largo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), muestra por consola uno de los siguientes mensajes en español: <br>
- `El driver tiene el nombre más largo, tiene XX caracteres.` o <br>
- `Parece que el navigator tiene el nombre más largo, tiene XX caracteres.` o <br>
- `¡Vaya, ambos tienen nombres de la misma longitud, XX caracteres!`.

Salidas esperadas (ejemplos):

- Caso driver más largo (ejemplo: `driver = Alexander`, `navigator = Bob`):
```bash
El driver tiene el nombre más largo, tiene 9 caracteres.
```

- Caso navigator más largo (ejemplo: `driver = Amy`, `navigator = Elizabeth`):
```bash
Parece que el navigator tiene el nombre más largo, tiene 9 caracteres.
```

- Caso igual longitud (ejemplo: `driver = Anna`, `navigator = Mark` — ambos 4):
```bash
¡Vaya, ambos tienen nombres de la misma longitud, 4 caracteres!
```

### ex3.js: Bucles

3.1 Imprime los caracteres del nombre del driver separados por espacios y [en mayúsculas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), por ejemplo: `"J O H N"`.

3.2 Imprime todos los caracteres del nombre del navigator en orden inverso, por ejemplo: `"nhoJ"`.

3.3 Dependiendo del [orden lexicográfico](https://en.wikipedia.org/wiki/Lexicographical_order) de los strings, muestra por consola uno de los siguientes mensajes en español: <br>

- `El nombre del driver va primero.` <br>
- `Oye, el nombre del navigator va primero, definitivamente.` <br>
- `¿Qué? ¿Ambos tienen el mismo nombre?`

Salidas esperadas (ejemplos):

- Para `driver = John`:
```bash
J O H N
```

- Para `navigator = Jane` (inverso):
```bash
enaJ
```

- Comparación lexicográfica (ejemplo: `driver = Alice`, `navigator = Bob`):
```bash
El nombre del driver va primero.
```

### ¡Es hora de los Bonus!

#### exbonus-1.js:

* Genera 3 párrafos. Guarda el texto en una nueva variable de tipo string llamada `longText`.
* Haz que tu programa cuente el número de palabras del string.
* Haz que tu programa cuente cuántas veces aparece la palabra latina [`et`](https://en.wiktionary.org/wiki/et#Latin).
 
 Salida esperada (ejemplo):
 ```bash
 Número total de palabras en longText: 42
 La palabra "et" aparece 3 veces
 ```

#### exbonus-2.js:

Crea una nueva variable, `phraseToCheck`, que contenga cualquier valor de tipo string. Escribe un código que compruebe si el valor asignado a esta variable es un [palíndromo](https://en.wikipedia.org/wiki/Palindrome). Estos son algunos ejemplos de palíndromos:

* `"A man, a plan, a canal, Panama!"`
* `"Amor, Roma"`
* `"race car"`
* `"stack cats"`
* `"step on no pets"`
* `"taco cat"`
* `"put it up"`
* `"Was it a car or a cat I saw?"` y `"No 'x' in Nixon"`.

 Salida esperada (ejemplo):
 ```bash
 phraseToCheck = "A man, a plan, a canal, Panama!"
 Resultado: Es un palíndromo.
 
 phraseToCheck = "Hello world"
 Resultado: No es un palíndromo.
 ```

**¡Feliz programación!** :heart:

## Recursos adicionales

* [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
* [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

<br>

## Preguntas frecuentes

<br>

<details>
  <summary>Estoy atascado en el ejercicio y no sé cómo resolver el problema ni por dónde empezar.</summary>
  <br>

Si estás atascado con tu código y no sabes cómo resolver el problema o por dónde empezar, da un paso atrás e intenta formular una pregunta clara sobre el problema concreto al que te estás enfrentando. Esto te ayudará a acotar el problema y a encontrar posibles soluciones.

Por ejemplo, ¿hay algún concepto que no entiendes o estás recibiendo un mensaje de error que no sabes cómo solucionar? Normalmente es útil explicar el problema de la forma más clara posible, incluyendo los mensajes de error que estás recibiendo. Esto te ayudará a comunicar el problema a otras personas y, potencialmente, a obtener ayuda de tus compañeros o de recursos online.

Una vez que tengas claro cuál es el problema, podrás empezar a trabajar en una solución.

[Volver arriba](#faqs)

</details>

<details>
  <summary>¿Cómo puedo obtener la longitud de un string en JavaScript?</summary>
  <br>

Para obtener la longitud de un string, puedes utilizar la propiedad `length`. Aquí tienes un ejemplo:

```js
const str = "Hello, world!";
console.log(str.length); // 13
```

La propiedad `length` devuelve el número de caracteres del string, incluidos los espacios y los caracteres especiales.

[Volver arriba](#faqs)

</details>

<details>
  <summary>¿Cómo puedo recorrer un string con un bucle?</summary>
  <br>

Aquí tienes un ejemplo de cómo utilizar un bucle `for` para recorrer un string:

```js
let str = "ironhack";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

Este código recorre cada carácter del string `str`. El bucle se ejecutará tantas veces como caracteres haya en el string.

En cada iteración, se mostrará por consola el carácter correspondiente.

[Volver arriba](#faqs)

</details>

<details>
  <summary>¿Cómo puedo comprobar si un substring existe dentro de un string?</summary>
  <br>

Puedes utilizar el método `includes()` para comprobar si un substring existe dentro de un string.

Este método devuelve un valor booleano (`true` o `false`) que indica si el string sobre el que se ejecuta contiene el substring especificado como argumento.

Ejemplo:

```js
let str = "hello world";

console.log(str.includes("hello"));  // true
console.log(str.includes("world"));  // true
console.log(str.includes("bye"));    // false
```

  <br>

También puedes utilizar el método `indexOf()`, que devuelve el índice de la primera aparición del substring dentro del string, o `-1` si no se encuentra.

Ejemplo:

```js
let str = "hello world";

console.log(str.indexOf("h"));      // 0
console.log(str.indexOf("world"));  // 6
console.log(str.indexOf("bye"));    // -1
```

[Volver arriba](#faqs)

</details>

<details>
  <summary>¿Cómo convierto un string a mayúsculas o minúsculas?</summary>
  <br>

#### Mayúsculas

Para convertir un string a *mayúsculas*, utiliza el método `toUpperCase()`. El método `toUpperCase()` devuelve un nuevo string con todos los caracteres en mayúsculas.

Ejemplo:

```js
let str = "ironhack";

console.log(str.toUpperCase());  // "IRONHACK"
```

  <br>

#### Minúsculas

Para convertir un string a *minúsculas*, puedes utilizar el método `toLowerCase()`. Este método devuelve un nuevo string con todos los caracteres en minúsculas.

Ejemplo:

```js
let str = "IRONHACK";

console.log(str.toLowerCase());  // "ironhack"
```

Es importante tener en cuenta que los métodos `toUpperCase()` y `toLowerCase()` no modifican el string original. Devuelven un nuevo string convertido al formato correspondiente.

[Volver arriba](#faqs)

</details>

<details>
  <summary>¿Cómo puedo invertir un string?</summary>
  <br>

Puedes utilizar un bucle `for` para recorrer los caracteres del string y añadirlos a un nuevo string en orden inverso.

Ejemplo:

```js
let str = "drawer";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);  // "reward"
```

El ejemplo anterior utiliza un bucle `for` para recorrer los caracteres del string `str` en orden inverso, empezando por el último carácter y terminando por el primero. En cada iteración, añade el carácter actual al string `reversed`.

[Volver arriba](#faqs)

</details>

<details>
  <summary>¿Cómo puedo crear un string de varias líneas en JavaScript?</summary>
  <br>

Para crear un string de varias líneas en JavaScript, debes utilizar template literals. Los template literals son strings delimitados mediante comillas invertidas (`). Permiten incluir expresiones dentro de los strings y crear strings que ocupan varias líneas.

Ejemplo:

```js
let str = `This is an
example of a
multi-line string.`;

console.log(str);
```

[Volver arriba](#faqs)

</details>


