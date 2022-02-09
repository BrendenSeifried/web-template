// IMPORT MODULES under test here:
import { cars } from './data.js';

const test = QUnit.test;



test('renderCars test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="car-detail"><h2 id="make">Honda</h2><p id="stats">Civic', 'sedan', 'FWD</p>./assets/sedan.png<img id="img" class="newimg"></div>`;
    
    //Act 





    // Call the function you're testing and set the result to a const
    const actual = cars({ 
        id: 1,
        make: 'Honda', 
        stats: ['Civic', 'sedan', 'FWD'],
        img: './assets/sedan.png'
    
    });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});




// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
