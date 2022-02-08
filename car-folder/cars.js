// import { cars } from '../data.js';
// import { findById } from '../utils.js';

// const dataStuff = new URLSearchParams(window.location.search);
// const car = findById(dataStuff.get('id'), cars);
// const anImg = document.getElementById('img');

// const make = document.getElementById('name');
// const stats = document.getElementById('stats');

// make.textContent = car.make;
// stats.textContent = car.stats;
// anImg.src = `../assets/${car.img}.png`;

  
import { cars } from '../data.js';
//import { renderCar } from '../render-utils.js';
import { findById } from '../utils.js';

//const carList = document.getElementById('car');


const dataStuff = new URLSearchParams(window.location.search);
const car = findById(dataStuff.get('id'), cars);
const anImg = document.getElementById('img');

const make = document.getElementById('make');
const stats = document.getElementById('stats');

make.textContent = car.make;
stats.textContent = car.stats;
anImg.src = `../assets/${car.img}.png`;

// function renderCars() { 
    
//     for (let car of cars) {
//         const div = renderCar(car);
//         carList.append(div);
//     }
// }
// renderCars();