const express = require("express");
const app = express()

app.get("/",(req,res) => {
    res.json({
        msg:"Now I Can Say I also knows AWS Cloud"
    })
})

app.listen(3000)