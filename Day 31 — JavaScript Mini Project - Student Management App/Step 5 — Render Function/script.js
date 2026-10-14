function renderStudents() {

    studentsContainer.innerHTML = "";

    students.forEach((student) => {

        const result =
            getResult(student.marks);

        const grade =
            getGrade(student.marks);

        studentsContainer.innerHTML += `

            <div class="student-card">

                <h3>
                    ${student.name}
                </h3>

                <p>
                    Email: ${student.email}
                </p>

                <p>
                    Marks: ${student.marks}
                </p>

                <p>
                    Result: ${result}
                </p>

                <p>
                    Grade: ${grade}
                </p>

            </div>

        `;
    });
}