const Employee = require("../lib/Employee")
const employee = new Employee("Me", 20101,"bootcamp@test.com")


test('creates a emplyee object', () => {
   
    expect (typeof(employee)).toBe("object")   
 })