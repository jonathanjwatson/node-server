const express = require("express");

const router = express.Router();

let students = [
  {
    id: 1,
    name: "Will Byers",
  },
  {
    id: 2,
    name: "Dustin Henderson",
  },
];

router.get("/api/students", (req, res) => {
  res.json(students);
});

router.get("/api/students/:id", (req, res) => {
  const foundStudent = students.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (foundStudent) {
    res.json(foundStudent);
  } else {
    res.status(404).end();
  }
});

router.post("/api/students", (req, res) => {
  students.push(req.body);
  res.status(201).json(students);
});

router.put("/api/students/:id", (req, res) => {
  const idToFind = parseInt(req.params.id);
  for (let i = 0; i < students.length; i++) {
    if (idToFind === students[i].id) {
      students[i].name = req.body.name;
    }
  }

  res.json(students);
});

router.delete("/api/students/:id", (req, res) => {
  const filteredStudents = students.filter(
    (student) => student.id !== parseInt(req.params.id)
  );
  students = filteredStudents;
  res.json(students);
});

module.exports = router;
