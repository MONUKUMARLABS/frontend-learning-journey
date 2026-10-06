const marks = [55, 62, 71, 78];

const allPassed = marks.every((mark) => {
    return mark >= 40;
});

console.log(allPassed);