import express from "express";
import cors from "cors";
import nameData from "./business.js";
const app = express();


app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/", (req, res) => {
  res.send("working fine");
});
app.get("/api", async (req, res) => {
  try {
    const names = await nameData();
    // console.log(data)
    res.status(200).json({names});
  } catch (error) {
    res.status(500).json({
      error: "something went wrong",
    });
  }
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0',() => {
  console.log(`serer is running port at ${PORT}`);
});
