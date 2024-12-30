// Create Element ~ Ejecutamos esto en consola

let titulo = document.querySelector('h1');

let span = document.createElement('span');

// Escribir y ejecutar: span

span

// Consola: <span></span>

span.textContent = '?';

// Consola: "?"

span

// Consola: <span>?</span>

// Pero el elemento esta simplemente guardado en JavaScript, no lo hemos incertado en el DOM.

// Para insertarlo vamos a utilizar otro metodo:

// Añadir un Hijo
titulo.appendChild(span);

// Podemos ver que el titulo tiene el span
// Consola: <span>?</span>

// Si queremos controlar la posicion de donde vamos a poner nuestro elemento podemos utilizar otro metodo 

titulo.insertAdjacentElement('beforebegin',span)

// Consola: <span>?</span>

// Podemos notar algo interesante y es que notaremos que se cambio a otra posicion 

titulo.insertAdjacentElement('afterbegin',span)

// Lo hemos movido a otra nueva posicion

titulo.insertAdjacentElement('beforeend',span)

// Resultado: Parques Nacionales"?"

titulo.insertAdjacentElement('afterend',span)