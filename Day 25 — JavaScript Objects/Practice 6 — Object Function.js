const student = {

    name: "Rahul",
    marks: 82,

    getResult: function() {

        if (this.marks >= 40) {
            return "Pass";
        }

        return "Fail";
    }

};

console.log(student.getResult());