import express from "express";

const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
  console.log(req.body);

  console.log("---222");

  return res.send("213123");
});

app.listen(3000, () => {
  console.log("server started on 3000");
});
