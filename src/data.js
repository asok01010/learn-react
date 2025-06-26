const students = [
  { id: 1, 
    name: "ASHOK",
    age: 20, 
    grade: "A",
    courses: [ "Math", "Science", "English" ],
},

  { id: 2, 
    name: "DARSHAN", 
    age: 22, 
    grade: "B",
    courses: [ "History", "Geography", "English" ],
 },
  { 
    id: 3, 
    name: "PRABIN", 
    age: 21,
    grade: "C" ,
    courses: [ "Math", "Physics", "Chemistry" ],
  },
  { id: 4, 
    name: "YADAV", 
    age: 23, 
    grade:"D",
    courses: [ "Biology", "Chemistry", "English" ],
},

];




students.map((data) => {
    console.log(`ID: ${data.id}`);
    console.log(`Name: ${data.name}`);
    console.log(`Age: ${data.age}`);
    console.log(`Grade: ${data.grade}`);

    data.courses.map((course) => {
        console.log(`Course: ${course}`);
    });


    console.log("-----------------------------");
    });



