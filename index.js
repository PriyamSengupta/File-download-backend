const express = require('express')
const cors = require("cors")
const app =  express()

app.use(cors())

app.get("/download", (req, res, next) => {
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition")
    res.download("file/file.mp4", (error) => {
        if(!error) console.log("Files has been downloaded successfully");
    })
})
app.listen(3000, () => {
    console.log("Server is listing on port 3000");
})