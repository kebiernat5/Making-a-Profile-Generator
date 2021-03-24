const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("getGitHub test", () => {
    const engineer = new Engineer ("Kate", "278702", "kebiernat5@gmail.com", "Engineer", "github.com/kebiernat5")
    expect(engineer.getGitHub()).toBe("github.com/kebiernat5")
})

test("getPosition test", () => {
    const engineer = new Engineer ("Kate", "278702", "kebiernat5@gmail.com", "Engineer")
    expect(engineer.getPosition()).toBe("Engineer")
})