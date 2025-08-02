import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "yammatamma";
const yourPassword = "lululele";
const yourAPIKey = "3176daf7-fc16-41fb-813e-1c89176f8c89";
const yourBearerToken = "f703869f-7162-4d77-a0d8-9df39cbdb7da";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const data = await axios.get('https://secrets-api.appbrewery.com/random')
  let value =  JSON.stringify(data.data)
  //TODO 2: Use axios to hit up the /random endpoint
  res.render('index.ejs',{content : value} )
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  
  const value = await axios.get("https://secrets-api.appbrewery.com/all?page=1", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
  let data = JSON.stringify(value.data)
  res.render('index.ejs',{content : data} )
  
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const value = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)

  let data = JSON.stringify(value.data)
  res.render('index.ejs',{content : data} )
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  
  const value = await axios.get("https://secrets-api.appbrewery.com/secrets/2", {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  });
  let data = JSON.stringify(value.data)
  res.render('index.ejs',{content : data} )
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
