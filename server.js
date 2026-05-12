import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        result: null
    });
});

app.post("/result", (req, res) => {
    const start = Number(req.body.starting_value);
    const end = Number(req.body.ending_value);
    const peroid = Number(req.body.number_of_peroids);
    let answer = (Math.pow(end / start, 1 / peroid) - 1) * 100;

    res.render("index", {
        result: answer,
    });
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});