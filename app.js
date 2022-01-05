const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public")
app.use(express.static(publicPath));

app.set('port', process.env.PORT || 3030)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.listen(app.get('port'), () => console.log("Servidor corriendo: puerto" + app.get('port'))
); 