const passedNames = students
    .filter((student) => student.marks >= 40)
    .map((student) => student.name);

console.log(passedNames);