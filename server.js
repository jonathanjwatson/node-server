const express = require("express");
const app = express();
const studentsController = require("./controllers/studentsController");

const PORT = 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(studentsController);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
