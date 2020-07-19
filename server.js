const axios = require('axios');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('morgan');
const path = require('path');
const fs = require('fs')
const SEOHelpers = require('./lib/index')
const Sitemap = require('./lib/Sitemap');
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
    const title = `${show.name} | ${podcastName}`;
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
      response.redirect('/page_404')
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
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;
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
      response.redirect('/page_404')
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
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;
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
      response.redirect('/page_404')
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
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;
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
      response.redirect('/page_404')
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
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;
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
      response.redirect('/page_404')
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
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
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


app.get('/affiliates', (request, response) => {
  const meta = {
    title: "JustCast's podcast affiliate program",
    description: "Earn a commission for every customer you refer to JustCast for podcast hosting and analytics.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    keywords: "affiliate",
    url: "https://www.justcast.com/affiliates",
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

app.get('/how-justcast-works', (request, response) => {
  const meta = {
    title: "How JustCast works",
    description: "Instructions on how to host your podcast from Dropbox with JustCast",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    keywords: "Podcasting, Church, COVID-19 Response",
    url: "https://www.justcast.com/how-justcast-works",
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


app.get('/blogs/resources-for-church-impacted-by-coronavirus', (request, response) => {
  const meta = {
    title: "Resources for church impacted by coronavirus",
    description: "During the coronavirus pandemic, JustCast is making free Pro accounts for churchs.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Church, COVID-19 Response",
    url: "https://www.justcast.com/blogs/resources-for-church-impacted-by-coronavirus",
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
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
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
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
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


app.get('/page_404', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: ""
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set({}, data)
    response.send(result);
  });   
})


app.get('/about_us', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
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



app.get('/private-podcast', (request, response) => {
  const meta = {
    title: "How to create a private podcast",
    description: "Create unlimited podcasts for one monthly price. Invite team members, see your podcast's stats, and distribute to Apple Podcasts, Spotify, Google Podcasts. We also offer private podcasting for your company or membership site.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com/private-podcast",
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
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
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
  const referer_url = request.headers.referer;
  const id = request.params.id;
  instance.get(`/v1/shows/${id}/audioposts?referer_url=${referer_url}`)
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
    //   response.redirect('/page_404')
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
  const referer_url = request.headers.referer;
  const id = request.params.id;
  const show_id = request.params.show_id;
  instance.get(`/v1/shows/${show_id}/audioposts/${id}?referer_url=${referer_url}`)
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
    //   response.redirect('/page_404')
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

// Protect podcast

app.get('/shows/:show_id/subscribers/:id', function(request, response) {    
  const id = request.params.id;
  const show_id = request.params.show_id;
  instance.get(`/v1/shows/${show_id}/private_feeds/${id}`)
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

    const meta = {
      title,
      description,
      img,      
      url,
      img_16: img_16,
      img_32: img_32,
      img_64: img_64,
      img_256: img_256,
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

app.get('/', (request, response) => {
  const meta = {
    title: "JustCast - Turns your Dropbox into Podcast Hosting",
    description: "Turns your Dropbox into Podcast Hosting",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
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

// sitemaps

app.get('/sitemap.xml', (request, response) => {
  const rootPath = process.env.REACT_APP_BASE_PATH;
  const urls = [`${rootPath}/features-pricing`, `${rootPath}/examples`, `${rootPath}/about_us`, 'https://justcast.zendesk.com/hc/en-us/categories/360002641372-FAQs'];
  const sitemapXml = Sitemap.generateXml(urls);
  response.header('Content-Type', 'text/xml');
  response.send(sitemapXml); 
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {  
  
  response.sendFile(filePath);
    
});

app.listen(port, () => console.log(`Listening on port ${port}`));