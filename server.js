const axios = require('axios');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('morgan');
const path = require('path');
const fs = require('fs')
const SEOHelpers = require('./lib/index')
const sanitizeHtml = require('sanitize-html');

dotenv.config();
app.use(logger('dev'));
const port = process.env.PORT || 5000;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH 
})
const filePath = path.resolve(__dirname, './build', 'index.html');
const privatePodcastFilePath = path.resolve(__dirname, './build', 'privatepodcast.html');

app.get('/shows/:show_id/audioposts/:id', function(request, response) {    
  const id = request.params.id;
  const show_id = request.params.show_id;
  instance.get(`/v1/shows/${show_id}/audioposts/${id}`)
  .then((res) => {
    const data = res.data;

    const show = data.show;
    const podcastName = data.name;
    const url = data.permulink;
    const title = `${show.name} | ${data.name}`;
    const description = data.description ? sanitizeHtml(data.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }

    if(show.is_private) {
      response.redirect('/private_podcast')
    } else {    
      fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        const result = SEOHelpers.set(meta, data)
        response.send(result);
      });
    }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});

app.get('/shows/:id/audioposts', function(request, response) {    
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts`)
  .then((res) => {

    const show = res.data.show;
    const url = show.link;
    const title = `${show.name}`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }

    if(show.is_private) {
      // redirect to error page
      response.redirect('/private_podcast')
    } else {
      fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        const result = SEOHelpers.set(meta, data)
        response.send(result);
      });
    }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});


app.get('/shows/:id/episodes', function(request, response) {    
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts`)
  .then((res) => {

    const show = res.data.show;
    const url = show.link;
    const title = `${show.name} | Episodes`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }
    
    if(show.is_private) {
      response.redirect('/private_podcast')
    } else {
      fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        const result = SEOHelpers.set(meta, data)
        response.send(result);
      });
    }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});


app.get('/shows/:id/subscribe', function(request, response) {    
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts`)
  .then((res) => {

    const show = res.data.show;
    const url = show.link;
    const title = `${show.name} | Subscribe`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }
    
    if(show.is_private) {
      response.redirect('/private_podcast')
    } else {
      fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        const result = SEOHelpers.set(meta, data)
        response.send(result);
      });
    }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});

app.get('/shows/:id/about_us', function(request, response) {    
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts`)
  .then((res) => {

    const show = res.data.show;
    const url = show.link;
    const title = `${show.name} | About Us`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }
    
    if(show.is_private) {
      response.redirect('/private_podcast')
    } else {
      fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        const result = SEOHelpers.set(meta, data)
        response.send(result);
      });
    }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});


app.get('/features-pricing', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})

app.get('/terms', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})

app.get('/privacy', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})


app.get('/private_podcast', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})


app.get('/about_us', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})


app.get('/examples', (request, response) => {
  const meta = {
    title: "What podcasts are hosted on JustCast?",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})

// widgets

app.get('/widget/:id/audioposts', function(request, response) {    
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts`)
  .then((res) => {

    const show = res.data.show;
    const url = show.link;
    const title = `${show.name} | About Us`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }
    
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = SEOHelpers.set(meta, data)
      response.send(result);
    });    

    // if(show.is_private) {
    //   response.redirect('/private_podcast')
    // } else {
    //   fs.readFile(filePath, 'utf8', function (err,data) {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     const result = SEOHelpers.set(meta, data)
    //     response.send(result);
    //   });
    // }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});


app.get('/widget/:show_id/audioposts/:id', function(request, response) {    
  const id = request.params.id;
  const show_id = request.params.show_id;
  instance.get(`/v1/shows/${show_id}/audioposts/${id}`)
  .then((res) => {
    const data = res.data;

    const show = data.show;
    const podcastName = data.name;
    const url = data.permulink;
    const title = `${show.name} | ${data.name}`;
    const description = data.description ? sanitizeHtml(data.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;

    const keywords = show.keywords ? show.keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
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
      twitter_handle,
      apple_iutnes_app_id
    }

    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = SEOHelpers.set(meta, data)
      response.send(result);
    });    

    // if(show.is_private) {
    //   response.redirect('/private_podcast')
    // } else {    
    //   fs.readFile(filePath, 'utf8', function (err,data) {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     const result = SEOHelpers.set(meta, data)
    //     response.send(result);
    //   });
    // }
  })
  .catch((err) => {
    // TODO: redirect to error page
    response.redirect('/error')
  })
});

app.get('/', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {  
  
  response.sendFile(filePath);
    
});

app.listen(port, () => console.log(`Listening on port ${port}`));