class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

const greeter = (person: Person) => {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

const studentGreeter = (student: Student) => {
    return `Hello grasshopper ${student.fullName}`
}

const user = new Student('Andrew', 'N', 'Ding');

console.log(studentGreeter(user));