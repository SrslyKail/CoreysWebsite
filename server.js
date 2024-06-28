const express = require("express");
const path = require("path");
const fileUpload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
const PORT = 4000;

app.use(express.static(initial_path));
app.use(fileUpload);

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
})