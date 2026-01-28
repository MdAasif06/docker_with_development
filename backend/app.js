import express from "express";
import nameData from "./business.js";
const app = express();

app.get("/", (req, res) => {
  res.send("working fine");
});
app.get("/api", async (req, res) => {
  try {
    const data = await nameData();
    // console.log(data)
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({
      error: "something went wrong",
    });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`serer is running port at ${PORT}`);
});
