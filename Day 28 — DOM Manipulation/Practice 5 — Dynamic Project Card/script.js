const app = document.getElementById("app");

const heading = document.createElement("h1");

heading.textContent = "My Developer Portfolio";

app.appendChild(heading);

const paragraph = document.createElement("p");

paragraph.textContent =
    "I am learning JavaScript and .NET Full Stack Development.";

app.appendChild(paragraph);

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "C#",
    "SQL",
    "ASP.NET Core"
];

const skillsList =
    document.getElementById("skills");

skills.forEach((skill) => {

    const li = document.createElement("li");

    li.textContent = skill;

    skillsList.appendChild(li);

});

skills.forEach((skill) => {

    const li = document.createElement("li");

    li.textContent = skill;

    li.classList.add("skill");

    skillsList.appendChild(li);

});

const projects =
    document.getElementById("projects");

const card = document.createElement("div");

card.classList.add("project-card");

const title = document.createElement("h2");

title.textContent =
    "Student Management System";

const description = document.createElement("p");

description.textContent =
    "A project built using .NET and SQL Server.";

card.appendChild(title);

card.appendChild(description);

projects.appendChild(card);