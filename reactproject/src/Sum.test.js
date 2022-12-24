const Sum = require('./Sum');

test("sum of 1 + 2 is 3", () => {
    expect(Sum(1,2)).toBe(3);
}) 

test("sum of 5 + 6 is not 10", () => {
    expect(Sum(5,6)).not.toBe(10);
}) 
test("sum of 5 + 6 is greater 10", () => {
    expect(Sum(5,6)).toBeGreaterThan(10);
}) 
test("sum of 5 + 3 is less 10", () => {
    expect(Sum(5,3)).toBeLessThan(10);
}) 


// truthiness
    // .toBeTruthy()
    // .toBeFalsy()
// null
    // .toBeNull()
    // .not.toBeNull()
// string match
    // .toMatch(/abc/);
    // .not.toMatch(/abc/);
