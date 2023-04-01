

var data = {
  name : "Tadka",
  grade : "VI",
  section : "A",
  marks : {
              maths : 55,
              science : 65,
              english : 70
          }
};

console.log(data.marks);
console.log(data.marks.maths);
console.log(data.marks.english);

console.log(data["marks"]["maths"]);