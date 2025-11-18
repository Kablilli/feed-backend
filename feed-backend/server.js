import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const data = JSON.parse(fs.readFileSync("./data/articles.json", "utf8"));

app.get("/api/feed", (req, res) => {
  const summaries = data.map(a => ({
    id: a.id,
    title: a.title,
    summary: a.summary
  }));
  res.json(summaries);
});

app.get("/api/article/:id", (req, res) => {
  const article = data.find(a => a.id === Number(req.params.id));
  article ? res.json(article) : res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend running on port", PORT));
