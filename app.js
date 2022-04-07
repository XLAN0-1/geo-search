const express = require("express");

const app = express();
app.use(express.static(__dirname + "/client/build"));


//SET UP PORT
const PORT = process.env.PORT || 3000;


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/lient/build/index.html");
})


app.listen(PORT, (req, res)=>{
    console.log("Server listening on port 3000");
})