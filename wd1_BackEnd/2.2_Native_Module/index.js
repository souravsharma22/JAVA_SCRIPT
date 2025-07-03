//hello to native modules of java script
const fn = require("fs")

// fn.writeFile('message.txt', 'Hello Node-JS, this is Sourav sharma',(err)=>{
//     console.log("The file has been saved");
// })

fn.readFile('message.txt','utf-8' ,(error,msg)=>{
    if(error) throw error
    console.log(msg)
})