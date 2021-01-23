const Employee = require("../lib/Employee.js");

test("create new employee", () => {
  employee = new Employee("kyle", 1234, "kyle@me.com");

  expect(employee.name).toBe("kyle");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("kyle@me.com");
});

test("gets employee info", () => {
  employee = new Employee("kyle", 1234, "kyle@gmail.com");

  expect(employee.getName()).toEqual(employee.name);
  expect(employee.getId()).toEqual(employee.id);
  expect(employee.getEmail()).toEqual(employee.email);
});

test("gets employee role", () => {
  employee = new Employee("kyle", 1234, "kyle@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
