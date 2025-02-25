//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course) {
let sum=0;
let count=0;
  for (let stuRecord of student.transcript) {
    if (stuRecord.course==course){
      for (let grade of stuRecord.grades) {
      sum =sum+grade;
      count++;
    }


    return sum/count;
  }

}
return -1;
}

function getAssignmentMark(student, course, num) {
  let count=0;

  for (let stuRecord of student.transcript) {
    if (stuRecord.course==course){
      for (let grade of stuRecord.grades) {
        count++;

        if (count==num){
          return grade;
        }

}
}
}
return -1;
}

function averageAssessment(students, courseName, assignment){

  let sum=0;
  let count=0;
  let i=0;

  for (let student of students){
    if (student.transcript.course==courseName){
      i++;
      for (let grade of student.grades) {
        count++;

        if (count==assignment) {
          sum=sum+grade;
        }

    }

  }
}

return(sum/i);

}