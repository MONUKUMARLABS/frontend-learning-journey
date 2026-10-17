const numbers = [2, 3, 4];

const product = numbers.reduce(
    (result, number) => {
        return result * number;
    },
    1
);

console.log(product);