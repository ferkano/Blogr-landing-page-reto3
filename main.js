const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span')

const connect = document.querySelector('.connect');
const enlacesconnect = document.querySelector('.enlace-connect')
const flecha = document.querySelectorAll('.a-connect .img-arrowlight');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')})
});

connect.addEventListener('click', () => {
    enlacesconnect.classList.toggle('activado');
    flecha.forEach(child => {child.classList.toggle('animado')});
});