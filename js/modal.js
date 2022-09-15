const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]



let stockProductos = [
    {id: 1, nombre: "Buzo Algodon", tipo: "Estampado Gris", cantidad: 20,desc: "Estampado", precio: 1200, talle: "Large", img: "./img/buzoB.jpg"},
    {id: 2, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 1, desc: "Estampado", precio: 1100, talle: "L", img: './img/buzoB2.jpg'},
    {id: 3, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 1, desc: "Estampado", precio: 1200, talle: "M", img: './img/buzoB3.jpg'},
    {id: 4, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 1, desc: "Estampado", precio: 1400, talle: "M", img: './img/buzoB2.jpg'},
    {id: 5, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 1, desc: "Estampado", precio: 1200, talle: "S", img: './img/buzoB2.jpg'},
    {id: 6, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 1, desc: "Estampado", precio: 1500, talle: "S", img: './img/buzoB3.jpg'},
    {id: 7, nombre: "Remera btc", tipo: "remera", cantidad: 1, desc: "Estampado", precio: 500, talle: "Large", img: './img/remeraa.webp'},
    {id: 8, nombre: "Remera btc", tipo: "remera", cantidad: 1, desc: "Estampado", precio: 500, talle: "Large", img: './img/remeraa.webp'},
    
]



botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})

const filtroTalles = ['medium','small', 'medium', 'large', 'extralarge'];

const filterItems = query => {
  return filtroTalles.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('large')); // ['large', 'extraLarge']
console.log(filterItems('small')); // ['small', 'extrasmall', 'medium']