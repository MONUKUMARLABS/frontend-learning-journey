const skills = [
    "C#",
    "SQL",
    "ASP.NET Core",
    "React"
];

localStorage.setItem(
    "skills",
    JSON.stringify(skills)
);

/* Read: */

const savedSkills =
    JSON.parse(
        localStorage.getItem("skills")
    );

console.log(savedSkills);