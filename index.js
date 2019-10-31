require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const friends = [
  { id: 1, name: "Shaun" },
  { id: 2, name: "Pere" },
  { id: 3, name: "Megan" }
];
app.use(express.json());
app.use(cors());

app.get("/api/friends", (req, res) => {
  res.json(friends);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
