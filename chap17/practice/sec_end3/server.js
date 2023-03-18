import express from "express";

const app = express();
const port = 3000;

/* テンプレートエンジンの指定 */
app.set("view engine", "ejs");

/* 公開用フォルダの指定 */
app.use(express.static("public"));

app.get("/", (req, res) => {
  const countdown = req.query.countdown;
  if (countdown) {
    res.render("index.ejs", { countdown: countdown });
  } else {
    res.send("countdownパラメータを指定してください。");
  }
});

app.get("/plus", (req, res) => {
  const { val1, val2 } = req.query;
  const sum = Number(val1) + Number(val2);
  res.render("plus.ejs", { val1, val2, sum });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}?countdown=5`);
  console.log(`listening at http://localhost:${port}/plus?val1=5&val2=6`);
});
