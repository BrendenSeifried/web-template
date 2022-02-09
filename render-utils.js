export function renderCar(car) {


    const div = document.createElement('div');
    div.classList.add('car');
    


    const a = document.createElement('a');
    a.href = `./car-folder/?id=${car.id}`;
  
    const img = document.createElement('img');
    img.src = `./assets/${car.img}.png`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = car.make;
    nameSpan.classList.add('make');

    const span = document.createElement('span');
    span.textContent = car.stats;


    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
