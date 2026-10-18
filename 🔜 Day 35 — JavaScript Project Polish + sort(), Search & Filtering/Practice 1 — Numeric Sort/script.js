const numbers = [
    100, 20, 5, 40, 75
];

const ascending =
    [...numbers].sort(
        (a, b) => a - b
    );

const descending =
    [...numbers].sort(
        (a, b) => b - a
    );

console.log(ascending);
console.log(descending);

/*output:
[5, 20, 40, 75, 100]
[100, 75, 40, 20, 5]
*/