const Engineer = require("../lib/Engineer.js");

test("creates engineer object", () => {
  engineer = new Engineer("kyle", 1234, "me@me.com", "github");

  expect(engineer.getGithub()).toBe("github");
  expect(engineer.getRole()).toBe("Engineer");
});
