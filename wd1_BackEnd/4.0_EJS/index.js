import express from 'express'
import ejs from 'ejs'

const d = new Date()
let date = d.getDay()

const port = 3000
const app = express()

app.get("/",(req,res)=>{
    // console.log(date)

    let day = "a weekday";
    let advice = " You really Need to work hard";

    if(date === 0 || date === 6)
    {
        day = 'the weekend';
        advice = "You can have some rest today and enjoy"
    }

    res.render('index.ejs', {
        dayType:day,
        advice :advice
    })
} )
app.listen(port,()=>{

})

