const axios = require('axios');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs')
const SEOHelpers = require('./lib/index')

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
    const url = show.link;
    const title = show.name;
    const description = show.description ? show.description : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_hanlde = show.twitter_hanlde ? show.twitter_hanlde : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const meta = {
      title,
      description,
      img,
      keywords,
      url,
      img_16: img_16,
      img_32: img_32,
      img_64: img_64,
      img_256: img_256,
      twitter_hanlde,
      apple_iutnes_app_id
    }
    
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = SEOHelpers.set(meta, data)
      response.send(result);
    });
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});

app.get('/shows/:show_id/audioposts/:id', (request, response) => {
  const show_id = request.params.show_id;
  const id = request.params.id;
  instance.get(`/v1/shows/${show_id}/audioposts/${id}`)
  .then((res) => {
    const audiopost = res.data;
    const show = res.data.show;
    const url = audiopost.link;
    const title = audiopost.name;
    const description = audiopost.description ? show.description : "Podcast power by JustCast";
    //TODO individual artwork per episode
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const keywords = audiopost.keywords ? audiopost.keywords : '';
    const twitter_hanlde = show.twitter_hanlde ? show.twitter_hanlde : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const meta = {
      title,
      description,
      img,
      keywords,
      url,
      img_16: img_16,
      img_32: img_32,
      img_64: img_64,
      img_256: img_256,
      twitter_hanlde,
      apple_iutnes_app_id
    }

    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = SEOHelpers.set(meta, data)
      response.send(result);
    });    
    
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
})


app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));