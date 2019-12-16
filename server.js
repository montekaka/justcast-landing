const axios = require('axios');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs')

dotenv.config();
const port = process.env.PORT || 5000;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH 
})

app.get('/shows/:id/audioposts', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  const id = request.params.id;
  instance.get(`/shows/${id}/audioposts`)
  .then((res) => {
    const show = res.data.show;
    
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        // redirect to error page
        return console.log(err);
      }
      result = data.replace(/\$OG_TITLE/g, show.name);
      //result = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
      //result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
      response.send(result);
    });
  })
  .catch((err) => {
    //redirect to error page
    console.log('error')
    response.redirect('/error')
  })


});


app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));