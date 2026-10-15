const user = {
    name: "Rahul",
    age: 22,
    role: ".NET Developer"
};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);

/* Read: */

const savedUser =
    localStorage.getItem("user");

const userData =
    JSON.parse(savedUser);

console.log(userData.name);
console.log(userData.role);