const Intern = require("../lib/Intern")
 const intern =new Intern ("Pal",22222,"pal@test.com", "TestSchoolU");

 
test('creates a intern object', () => {
   
    expect (typeof(intern)).toBe("object") 
})

test("get school", () =>{
    expect (intern.getSchool()).toBe("TestSchoolU")
});
