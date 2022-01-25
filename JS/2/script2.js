// Defining Object, Properties and Class with Constructor

class Student {
    constructor(
        // Defines Parameter
        name, age, course, marks, answer, batch
    )
    {
        // Defines Properties
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
        this.answer = answer;
        this.isCompleted = {
            answer: answer,
            batch: batch
        };
    }
}

export default Student;