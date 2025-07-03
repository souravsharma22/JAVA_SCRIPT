import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'
import { url } from 'inspector';

inquirer
  .prompt([
    {
        "message":"Type in your URL",
        "name": "URL",
        
    }
  ])
  .then((answers) => {
    var ans = answers.URL
    var qr_svg = qr.image(ans)
    qr_svg.pipe(fs.createWriteStream('Simon_game.png'))

    fs.writeFile('url.txt', ans, (error)=>{
        if (error) throw error;
        console.log("The file is saved successfully");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      // Something else went wrong
    }
  });