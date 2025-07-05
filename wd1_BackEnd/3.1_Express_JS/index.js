import express from 'express'
const app  = express()

app.get("/", (req,res)=>{
    // console.log(req.headers)
    res.send("<h1>Hello there!, This is Sourav Sharma, What's your work here</h1>");
})
app.get("/about", (req,res)=>{
    // console.log(req.headers)
    res.send("<h1>Sourav Sharma</h1> \n He is an amazing coder a good leader and a fast learner");
})

app.get("/contact", (req,res)=>{
    // console.log(req.headers)
    res.send("<h1>Contact</h1> \n mail- souravbgp2210@gmail.com");
})


app.listen(3000, ()=>{
    console.log("Listening to the port 3000");
})