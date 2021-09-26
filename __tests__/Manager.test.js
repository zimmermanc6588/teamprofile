const Manager = require('../lib/Manager.js')
    const manager = new Manager( `Sal`, 45, `test@gmail.com`, 12345655555);


test('creates a manager object', () => {
   
    expect (typeof(manager)).toBe("object")   
 })

 test("get office number ",() =>{
     
     expect (manager.getOfficenumber()).toBe(12345655555)

 })