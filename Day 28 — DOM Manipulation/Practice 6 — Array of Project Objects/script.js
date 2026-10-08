
const projects = [
  {
    name: "Student Management System",
    technology: ".NET + SQL Server"
  },
  {
    name: "E-Commerce Application",
    technology: "ASP.NET Core + React"
  },
  {
    name: "Portfolio Website",
    technology: "HTML + CSS + JavaScript"
  }
];

const container = document.getElementById("container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = project.name;

  const technology = document.createElement("p");
  technology.textContent = `Technology: ${project.technology}`;

  card.appendChild(title);
  card.appendChild(technology);

  container.appendChild(card);
});