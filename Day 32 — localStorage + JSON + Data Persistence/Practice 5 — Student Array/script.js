let students = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@example.com",
        marks: 82
    },
    {
        id: 2,
        name: "Amit",
        email: "amit@example.com",
        marks: 68
    }
];

/* Save: */

localStorage.setItem(
    "students",
    JSON.stringify(students)
);