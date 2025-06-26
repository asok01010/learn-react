

const Student = () => {
  const students = [
    {
      id: 1,
      name: "ASHOK",
      age: 20,
      grade: "A",
      courses: ["Math", "Science", "English"],
    },

    {
      id: 2,
      name: "DARSHAN",
      age: 22,
      grade: "B",
      courses: ["History", "Geography", "English"],
    },
    {
      id: 3,
      name: "PRABIN",
      age: 21,
      grade: "C",
      courses: ["Math", "Physics", "Chemistry"],
    },
    {
      id: 4,
      name: "YADAV",
      age: 23,
      grade: "D",
      courses: ["Biology", "Chemistry", "English"],
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.grade}</td>
                <td>{data.courses.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
