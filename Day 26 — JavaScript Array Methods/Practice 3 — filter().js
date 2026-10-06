const numbers = [10, 15, 20, 25, 30, 35];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);