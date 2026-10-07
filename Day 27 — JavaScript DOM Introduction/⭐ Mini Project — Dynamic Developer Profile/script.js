const developer = {
  name: "Monu Kumar",
  role: ".NET Full Stack Developer",
  city: "Bhagalpur",
  experience: 1,
  skills: ["HTML", "CSS", "JavaScript", "C#", "SQL"]
};

document.getElementById("name").textContent = developer.name;
document.getElementById("role").textContent = developer.role;
document.getElementById("city").textContent = developer.city;
document.getElementById("experience").textContent =
  `${developer.experience} years`;

document.getElementById("avatar").textContent = developer.name
  .split(" ")
  .map((word) => word[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const skillsList = document.getElementById("skills");

developer.skills.forEach((skill) => {
  const item = document.createElement("li");
  item.textContent = skill;
  skillsList.appendChild(item);
});