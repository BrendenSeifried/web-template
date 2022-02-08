export function renderCar(car) {

    // const div = document.createElement('div');
    // div.classList.add('car');
    //  div.style.top = car.top;
    //  div.style.left = car.left;


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


    // const h2 = document.createElement('h2');
    // h2.textContent = car.make.toUpperCase();

    // const img = document.createElement('img');
    // img.classList.add('img');
  

    // const ul = document.createElement('ul');
    // for (let stat of car.stats) {
    //     const li = document.createElement('li');
    //     li.textContent = stat;
    //     ul.append(li);
    // }
    
    // div.append(h2, ul, img);
    // return div;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
