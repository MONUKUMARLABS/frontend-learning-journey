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