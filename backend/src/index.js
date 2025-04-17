import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.post("/login", async (req, res) => {
  const data = req.body;

  if (data.email === "enkhtuvshin@gmail.com" && data.password === "123") {
    res.send({ status: "success", token: "tokenformbackend" });
  }

  console.log(data);
  res.send({ status: "failed", message: "Invalid password" });
});

app.listen(3000, () => {
  console.log("server started on 3000");
});
