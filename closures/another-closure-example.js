function interviewQuestion(job) {
    const a = ', can you please explain what UX design is ?';
    const b = ', what subject do you teach ?';
    const c = ', what do you do for a living ?';

    if(job === 'teacher') {
        return function(name) {
            console.log(name + b);
        }
    } else if (job === 'designer') {
        return function(name) {
            console.log(name + a);
        }
    } else {
        return function(name) {
            console.log(name + c);
        }
    }
}

let teacherInterviewQuestion = interviewQuestion('teacher');
let designerInterviewQuestion = interviewQuestion('designer');
let otherInterviewQuestion = interviewQuestion('formula1 driver');

teacherInterviewQuestion('Fyneman');
designerInterviewQuestion('Ching');
otherInterviewQuestion('Lewis');