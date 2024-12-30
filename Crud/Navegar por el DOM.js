// Aqui tenemos una lista de las imagenes

document.querySelectorAll('img')

// Pero deseo la segunda:
// Si deseo la segunda entonces accedemos al indice 1

document.querySelectorAll(img)[1];

// Si quisiera ir al contenedor entonces:

document.querySelectorAll('img')[1].parentElement;

// Tambien podremos seleccionar el padre del padre de este elemento:
// Esto podriamos hacerlo muchisimas veces 

document.querySelectorAll('img')[1].parentElement.parentElement

// Tambien accedemos a los hijos
contenedor.children[0].children

// Podemos acceder al primer elemento
$0.firstElementChild

// Podemos acceder al ultimo elemento
$0.lastElementChild