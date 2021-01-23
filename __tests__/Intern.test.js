const Intern = require("../lib/Intern.js");

test("creates intern object", () => {
  intern = new Intern("kyle", 1234, "me@me.com", "trilogy");

  expect(intern.getSchool()).toBe("trilogy");
  expect(intern.getRole()).toBe("Intern");
});
