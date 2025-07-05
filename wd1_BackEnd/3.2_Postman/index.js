import express from 'express'
const app  = express()

app.get("/", (req,res)=>{
    res.send("<h1>Hello there!, This is Sourav Sharma, What's your work here</h1>");
})
app.post("/register", (req,res)=>{
    res.sendStatus(201)
})

app.put("/user/sourav", (req,res)=>{
    res.sendStatus(200)
})
app.patch("/user/sourav", (req,res)=>{
    res.sendStatus(200)
})
app.delete("/user/sourav", (req,res)=>{
    res.sendStatus(200)
})


app.listen(3000, ()=>{
    console.log("Listening to the port 3000");
})