async function showStudent() {

    try {

        const student =
            await getStudent();

        console.log(student);

    } catch (error) {

        console.log(error);

    }

}