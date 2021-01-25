const generateManagers = (Team) => {
  ManagerArr = Team.ManagerArr;
  if (ManagerArr.length > 0) {
    const ManagerHTML = ManagerArr.map(({ name, id, email, officeNumber }) => {
      return `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">
            Employee: ${id}
          </p>
          <p class="card-text">
            Email: ${email}
          </p>
          <p class="card-text">
            Office Number: ${officeNumber}
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        </div>
        `;
    });
    console.log(ManagerHTML.join(""));
  } else {
    return "";
  }
};

const generateEngineers = (Team) => {
  EngineerArr = Team.EngineerArr;
  if (EngineerArr.length > 0) {
    const EngineerHTML = EngineerArr.map(({ name, id, email, github }) => {
      return `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">
            Employee: ${id}
          </p>
          <p class="card-text">
            Email: ${email}
          </p>
          <p class="card-text">
            GitHub: ${github}
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        </div>
        `;
    });
    console.log(EngineerHTML.join(""));
  } else {
    return "";
  }
};

const generateInterns = (Team) => {
  InternArr = Team.InternArr;
  if (InternArr.length > 0) {
    const InternHTML = InternArr.map(({ name, id, email, school }) => {
      return `
        <div class="card m-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">
            Employee: ${id}
          </p>
          <p class="card-text">
            Email: ${email}
          </p>
          <p class="card-text">
            School: ${school}
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        </div>
        `;
    });
    console.log(InternHTML.join(""));
  } else {
    return "";
  }
};

module.exports = generateManagers;
