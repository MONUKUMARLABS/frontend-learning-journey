const topThree =
    [...students]
        .sort((a, b) =>
            b.marks - a.marks
        )
        .slice(0, 3);

console.log(topThree);