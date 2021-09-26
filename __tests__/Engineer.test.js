const Engineer = require("../lib/Engineer.js")
const engineer = new Engineer("Sapper",11111, "12B@test.com","12BSapper")

test("creates a Engineer object",( ) =>{
    expect (typeof(engineer)).toBe("object")
})

test("get github", () =>{
    expect (engineer.getGithub()).toBe("12BSapper")
})