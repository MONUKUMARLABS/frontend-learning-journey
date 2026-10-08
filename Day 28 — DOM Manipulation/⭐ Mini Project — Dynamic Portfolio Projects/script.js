const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "SQL",
  "ASP.NET Core",
  "React"
];

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

const skillsList = document.getElementById("skills");
const projectsContainer = document.getElementById("projects");

skills.forEach((skill) => {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

projects.forEach((project, index) => {
  const projectCard = document.createElement("article");
  projectCard.classList.add("project-card");

  const projectIndex = document.createElement("p");
  projectIndex.classList.add("project-index");
  projectIndex.textContent = `PROJECT ${String(index + 1).padStart(2, "0")}`;

  const projectName = document.createElement("h3");
  projectName.classList.add("project-name");
  projectName.textContent = project.name;

  const projectTechnology = document.createElement("p");
  projectTechnology.classList.add("project-technology");
  projectTechnology.textContent = project.technology;

  projectCard.append(projectIndex, projectName, projectTechnology);
  projectsContainer.appendChild(projectCard);
});