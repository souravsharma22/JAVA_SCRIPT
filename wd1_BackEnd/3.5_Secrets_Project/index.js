//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express'
import { dirname } from 'path'
import { fileURLToPath} from 'url'
import bodyParser from 'body-parser'
import { get } from 'http'
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
let valid;
let password;
function getPass(req, res, next){
    password = req.body['password'];
    if (password == "ILoveProgramming") valid = true;
    next()
}

app.use(getPass)

app.get("/", (req,res)=>{
    res.sendFile(__dirname +'/public/index.html')
})

app.post("/check", (req,res)=>
{
    if(valid)
        res.sendFile(__dirname + "/public/secret.html");
    else
        res.sendFile(__dirname +'/public/index.html')
})

app.listen(port, ()=>{
    console.log("Listening to port no ", port)
})