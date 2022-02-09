// IMPORT MODULES under test here:
import { cars } from '../data.js';
import { renderCar } from '../render-utils.js';

const test = QUnit.test;



test('renderCars test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="car"><a href="./car-folder/?id=1"><img src="./assets/./assets/sedan.png.png"><span class="make">Honda</span><span>Civic,sedan,FWD</span></a></li>`;
    
    //Act 





    // Call the function you're testing and set the result to a const
    const actual = renderCar({ 
        id: 1,
        make: 'Honda', 
        stats: ['Civic', 'sedan', 'FWD'],
        img: './assets/sedan.png'
    
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});



