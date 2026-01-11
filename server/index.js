import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("API Stunning-Meme OK");
});

// Route analyze
app.post("/api/analyze", (req, res) => {
  const { match, league, date } = req.body;

  res.json({
    status: "success",
    match,
    league,
    date,
    prediction: {
      homeWin: 0.45,
      draw: 0.28,
      awayWin: 0.27,
      advice: "Double chance 1X"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
