const inquirer = require("inquirer");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const writeFile = require("./src/generate-page.js");
const generatePage = require("./src/page-template.js");

const Team = {
  ManagerArr: [],
  EngineerArr: [],
  InterArr: [],
};

const getManagers = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is this manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
      },
    ])
    .then((ManagerData) => {
      Team.ManagerArr.push(
        new Manager(
          ManagerData.name,
          ManagerData.id,
          ManagerData.email,
          ManagerData.officeNumber
        )
      );
      console.log(Team.ManagerArr);
      //Run();
    });
};

const getEngineers = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is this engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is their GitHub username?",
      },
    ])
    .then((EngineerData) => {
      Team.EngineerArr.push(EngineerData);
      Run();
    });
};

const getInterns = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is this intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school are they from?",
      },
    ])
    .then((InternData) => {
      Team.InterArr.push(InternData);
      Run();
    });
};

const selectEmployee = () => {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "selectEmployee",
      message: "Would you like to add another employee?",
      default: true,
    },
    {
      type: "checkbox",
      name: "employeeType",
      message: "Which type of employee would you like to add?",
      choices: ["Engineer", "Intern", "Manager"],
      when: ({ selectEmployee }) => {
        if (selectEmployee) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

const Run = () => {
  selectEmployee()
    .then((response) => {
      if (response.employeeType) {
        if (response.employeeType[0] === "Engineer") {
          getEngineers();
          return;
        }
        if (response.employeeType[0] === "Intern") {
          getInterns();
          return;
        }
        if (response.employeeType[0] === "Manager") {
          getManagers();
        } else {
          console.log("**No employee type selected.**");
          selectEmployee();
          return;
        }
      } else {
        //generatePage(Team);
        //writeFile(Team);
      }
    })
    .catch((err) => {
      return err;
    });
};

getManagers();
