import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from 'path'
import { fileURLToPath } from "url"; 
const __dirname = dirname(fileURLToPath(import.meta.url))

const filepath = __dirname + '/public/index.html'
 
const app = express();
const port = 3000;
let bandname;
app.use(bodyParser.urlencoded({ extended:true}))

function bandNameGenerator(req, res, next)
{
  console.log(req.body)
  bandname = req.body['street'] + req.body['pet']
  next()
}
app.use(bandNameGenerator)
app.get("/", (req, res)=>{
  res.sendFile(filepath)
})

app.post("/submit", (req,res)=>{
  res.send(`<h1>The suggested name is-\n</h1><h2><u>${bandname}</u></h2>`)

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
