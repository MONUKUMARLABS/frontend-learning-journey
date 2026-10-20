const promise =
    new Promise((resolve, reject) => {

        reject("Something went wrong");

    });

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });