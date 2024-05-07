const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000


app.get("/", (req, res)=>{
    res.send("Watch lister server is here!!")
})

app.listen(port, ()=>{
    console.log(`Movie Lister server is running on port ${port}`)
})