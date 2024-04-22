const express = require("express");
const app = express();
const port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res)=>{
    res.send("this is root");
});

app.get("/search", (req, res)=>{
    res.send("you connect with search path");
});

app.get("/help", (req, res)=>{
    res.send("you connect with help path");
});

app.get("*", (req, res)=>{
    res.send("path does not exit");
});

// app.use((req, res) =>{
//     // console.log(req);
//     console.log("req accepted");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>";
//     res.send(code);
// });