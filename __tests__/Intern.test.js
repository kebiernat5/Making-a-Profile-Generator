const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("getSchool test", () => {
    const intern = new Intern ("Kate", "278702", "kebiernat5@gmail.com", "Intern", "Wagner College")
    expect(intern.getSchool()).toBe("Wagner College")
})