const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test("One euro should be 1.07 dollars", function(valueInDollars) {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("3.5 dollars should be 541.35 yens", function(valueInYens) {

    const yens = fromDollarToYen(3.5);

    const expected = 3.5 * (156.5 / 1.07); 

     expect(yens).toBe(expected); 
})

test("3.5 yens should be 0.01 pounds", function(valueInPounds) {

    const pounds = fromYenToPound(3.5);

    const expected = ((1/156.5)*3.5)*0.87; 
     expect(pounds).toBe(expected); 
})