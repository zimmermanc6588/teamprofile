const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager( `Sal`, 45, `test@gmail.com`, 12345655555);
    expect (typeof(manager)).toBe("object")   
 })