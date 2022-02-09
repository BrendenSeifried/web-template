
import { cars } from '../data.js';
import { findById } from '../utils.js';



const dataStuff = new URLSearchParams(window.location.search);
const params = dataStuff.get('id');

const car = findById(params, cars);
const anImg = document.getElementById('img');

const make = document.getElementById('make');
const stats = document.getElementById('stats');
//console.log(car, anImg, make, stats, params);

make.textContent = car.make;

stats.textContent = car.stats;
anImg.src = `../assets/${car.img}.png`;



