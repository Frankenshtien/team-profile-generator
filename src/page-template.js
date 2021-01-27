const fs = require("fs");

const generateManagers = (ManagerArr) => {
  if (ManagerArr.length > 0) {
    return ManagerArr.map((manager) => {
      return `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
          <p class="card-text">
            Employee: ${manager.getId()}
          </p>
          <p class="card-text">
            Email: <a href ="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
          </p>
          <p class="card-text">
            Office Number: ${manager.getOfficeNumber()}
          </p>
        </div>
        </div>
        `;
    }).join("");
  } else {
    return "";
  }
};

const generateEngineers = (EngineerArr) => {
  if (EngineerArr.length > 0) {
    const EngineerHTML = EngineerArr.map((engineer) => {
      return `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
          <p class="card-text">
            Employee: ${engineer.getId()}
          </p>
          <p class="card-text">
            Email: <a href ="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
          </p>
          <p class="card-text">
            GitHub: <a href=https://github.com/${engineer.getGithub()}>${engineer.getGithub()}</a>
          </p>
        </div>
        </div>
        `;
    });
    return EngineerHTML.join("");
  } else {
    return "";
  }
};

const generateInterns = (InternArr) => {
  if (InternArr.length > 0) {
    return InternArr.map((intern) => {
      return `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
          <p class="card-text">
            Employee: ${intern.getId()}
          </p>
          <p class="card-text">
            Email: <a href ="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </p>
          <p class="card-text">
            School: ${intern.getSchool()}
          </p>
        </div>
        </div>
        `;
    }).join("");
  } else {
    return "";
  }
};

const makeHTML = (Team) => {
  const { ManagerArr, EngineerArr, InternArr } = Team;
  const managers = generateManagers(ManagerArr);
  const engineers = generateEngineers(EngineerArr);
  const interns = generateInterns(InternArr);
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Portfolio</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1 class="bg-dark text-white text-center p-4">Placeholder Header</h1>
    <div class="container">
    <div class="row text-center justify-content-center">
    ${managers}
    ${engineers}
    ${interns}
    </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `;
  return html;
};

module.exports = makeHTML;
