async function showStudent() {

    const student =
        await getStudent();

    console.log(student);

}

showStudent();