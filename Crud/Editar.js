// Modificar texto en el DOM, podemos modificar el texto National 
// Parks a Parques Nacionales en el titulo h1 como ejemplo

document.querySelector('h1').textContent = 'Parques Nacionales';

// Si queremos que funciones con html tenemos que usar otra propiedad.

document.querySelector('h1').innerHTML = '<b>Parques Nacionales</b>';

// Observa la siguiente imagen del inicio de Google Chrome. El diseñador de Google desea agregar el texto 'Más información' dinámicamente en la barra de navegación en donde indica la flecha de color rojo.

// 1. Selecciona el elemento 'ul' dentro del elemento 'nav' que es único en pagina web y guárdalo en la variable 'navegación'. 
// 2. Después crea un elemento 'li' y guárdalo en la variable 'info'.
// 3. Asigna el texto 'Más información' a la variable 'info'.
// 4. Por último inserta la variable 'info' en la variable 'navegación'. Usa comillas simples.

// let navegación = document.querySelector('nav ul');
// let info = document.createElement('li');
// info.textContent ='Más información';
// navegación.insertAdjacentElement('beforeend', info);