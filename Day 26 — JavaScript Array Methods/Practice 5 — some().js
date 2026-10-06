const marks = [55, 62, 31, 78];

const hasFailed = marks.some((mark) => {
    return mark < 40;
});

console.log(hasFailed);