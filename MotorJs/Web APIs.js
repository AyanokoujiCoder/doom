// Vamos a ver un Web APIs que es muy util para ver como podemos mejorar la optimizacion de nuestra pagina.

performance.now()

// Con esta Api vas a poder medir que tan rapido es correr una funcion 
// Podemos modificar de 400 a 40000

let antes = performance.now();
for (let i = 0; i < 400; i++) {
    let elemento = document.createElement('p');
    elemento.textContent = 'Este es un parrafo';
    document.body.appendChild(elemento);
}
let despues = performance.now();
console.log(despues - antes);

// Queremos ver cuanto tiempo nos estamos demorando en poner todos esos elementos como parte del DOM 
// El valor 8.100000000558794 milisegundos equivale a aproximadamente 0.0081 segundos.

// Ojo por que esto sera en la computadora de cada usuario por su rendimiento.