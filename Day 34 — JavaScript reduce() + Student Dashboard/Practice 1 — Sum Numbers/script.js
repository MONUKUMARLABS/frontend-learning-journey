const numbers = [5, 10, 15, 20];

const total = numbers.reduce(
    (sum, number) => {
        return sum + number;
    },
    0
);

console.log(total);