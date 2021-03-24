const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("getofficeNum test", () => {
    const manager = new Manager ("Kate", "278702", "kebiernat5@gmail.com", "Manager", "315")
    expect(manager.getofficeNum()).toBe("315")
})

test("getPosition test", () => {
    const manager = new Manager ("Kate", "278702", "kebiernat5@gmail.com", "Manager", "315")
    expect(manager.getPosition()).toBe("Manager")
})