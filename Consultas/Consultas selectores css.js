document.querySelector('body')

// Esto va a retornar un elemento 

document.querySelector('#app')

// Seleccionamos un div (solo retorna un elemento)

document.querySelector('div')

// Si quieres tener todos los elementos que son divs puedes utilizar otro metodo:

document.querySelectorAll('div')

// Seleccionamos todos los elementos en los que el padre va a ser app y tienen la clase que seleccione .uk-offcanvas-content

document.querySelectorAll('#app .uk-offcanvas-content')