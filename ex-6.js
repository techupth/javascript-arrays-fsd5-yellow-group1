const student = {
  name: "John Doe",
  grade: 12,
  subjects: ["Math", "Science", "History"],
};
let newProperty = "age";
student[newProperty] = 18;
console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("Student Grade: " + student.grade);
console.log("Student Subjects: " + student.subjects);
