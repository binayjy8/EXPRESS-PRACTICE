const express = require("express");
const app = express();
const port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) =>{
    // console.log(req);
    console.log("req accepted");
    res.send({
        name: "Bismay",
        play: "cricket",
    });
});