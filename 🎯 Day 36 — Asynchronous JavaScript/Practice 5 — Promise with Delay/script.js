function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Rahul",
                marks: 82
            });

        }, 2000);

    });

}