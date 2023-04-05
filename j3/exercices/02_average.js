const student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};

const DECIMAL = 100;

const averageNotes = ({ notes }) => {
  const avg = notes.reduce((acc, curr) => curr + acc, 0) / notes.length;

  return Math.floor(avg * DECIMAL) / DECIMAL;
};

// 1
student.average = averageNotes(student);

console.log(student);

// 2

const { name, notes, average } = student;

console.log(name, notes, average);
