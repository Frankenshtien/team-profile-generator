const Manager = require("../lib/Manager.js");

test("creates manager object", () => {
  manager = new Manager("kyle", 1234, "kyle@email.com", 666);

  expect(manager.getName()).toBe("kyle");
  expect(manager.getOfficeNumber()).toBe(666);
});

test("gets managers role", () => {
  manager = new Manager("kyle", 1234, "kyle@email.com", 666);

  expect(manager.getRole()).toBe("Manager");
});
