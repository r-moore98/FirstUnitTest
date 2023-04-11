const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);


    expect(total).toBe(23);

});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(2)
    // 
    const expected = 2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(255.8); //
})

test("One yen should be 0.8 euro", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(125)
    // 
    const expected = 125 * .08; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(125)).toBe(100); //
})