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

const filePath = path.resolve(__dirname, './build', 'index.html');

app.get('/shows/:id/audioposts', function(request, response) {  
  
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts`)
  .then((res) => {
    const show = res.data.show;
    const title = show.name;
    const description = show.description ? show.description : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const keywords = show.keywords ? show.keywords : '';
    
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        // redirect to error page
        return console.log(err);
      }

      data = data.replace(/\$DESCRIPTION/g, description);
      data = data.replace(/\$KEYWORKDS/g, keywords);



      

      response.send(data);
    });
  })
  .catch((err) => {
    //redirect to error page
    console.log('error')
    response.redirect('/error')
  })
});

app.get('/shows/:show_id/audioposts/:id', (request, response) => {
  const show_id = request.params.show_id;
  const id = request.params.id;
  instance.get(`/`)
})


app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));