import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "f703869f-7162-4d77-a0d8-9df39cbdb7da";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const body = {
    "secret": req.body.secret,
    "score": req.body.score,
  }


  try{
      const result = await axios.post(`${API_URL}/secrets`, body, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

});


// TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const body = {
    "secret": req.body.secret,
    "score": req.body.score,
  }
  try{
    const result = await axios.put(API_URL + "/secrets/" + searchId, body , config);
          res.render("index.ejs", { content: JSON.stringify(result.data) });

  }catch (error){
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
  
});



  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const body = {
    "secret": req.body.secret,
    "score": req.body.score,
  }
  try{
    const result = await axios.patch(API_URL + "/secrets/" + searchId, body , config);
          res.render("index.ejs", { content: JSON.stringify(result.data) });

  }catch (error){
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.delete(API_URL + "/secrets/" + searchId , config);
          res.render("index.ejs", { content: JSON.stringify(result.data) });

  }catch (error){
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
