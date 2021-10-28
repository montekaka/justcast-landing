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

const appleVerification = {
  root: path.join(__dirname, `./build`, 'apple-developer-merchantid-domain-association'),
};

// apple-developer-merchantid-domain-association
app.get('/.well-known/apple-developer-merchantid-domain-association', (req, res) => {
  res.status(200)
  .sendFile(`apple-developer-merchantid-domain-association`, appleVerification)
})

app.get('/shows/:show_id/audioposts/:id', function(request, response) {    
  const id = request.params.id;
  const show_id = request.params.show_id;
  instance.get(`/v1/shows/${show_id}/audioposts/${id}`)
  .then((res) => {
    const data = res.data;

    const show = data.show;
    const podcastName = data.episode_title;
    const url = data.permulink;
    const title = `${show.podcast_title} | ${podcastName}`;
    const description = data.description ? sanitizeHtml(data.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    // const keywords = show.keywords ? show.keywords : '';
    const keywords = data.itunes_keywords ? data.itunes_keywords : (show.keywords ? show.keywords : '');
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";
    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";

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
      apple_iutnes_app_id,
      custom_favicon_image,
      backgroundColorClass,      
    }

    if(show.is_private_show) {
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
    const title = `${show.podcast_title}`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const rss_url = show.rss_feed;
    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";
    
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
      apple_iutnes_app_id,
      rss_url: rss_url,
      custom_favicon_image,
      backgroundColorClass
    }

    if(show.is_private_show) {
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


app.get('/shows/:id/support_us', function(request, response) {
  const id = request.params.id;
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;    
    const url = show.link;
    const title = `${show.podcast_title} | Support us`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const rss_url = show.rss_feed;
    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";
    
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
      apple_iutnes_app_id,
      rss_url: rss_url,
      custom_favicon_image,
      backgroundColorClass
    }

    if(show.is_private_show) {
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


app.get('/podcasts/:id', function(request, response) {
  const id = request.params.id;
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;    

    const url = show.link;
    const title = `${show.podcast_title}`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";
    
    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";

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
      apple_iutnes_app_id,
      custom_favicon_image,
      backgroundColorClass
    }

    if(show.is_private_show) {
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


app.get('/mobile-player-widget/:id/audioposts', function(request, response) {
  const id = request.params.id;
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;    

    const url = show.link;
    const title = `${show.podcast_title}`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";
    
    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";

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
      apple_iutnes_app_id,
      custom_favicon_image,
      backgroundColorClass
    }

    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = SEOHelpers.set(meta, data)
      response.send(result);
    });

    // allow everyone has the link to access the widget
    // if(show.is_private_show) {
    //   // redirect to error page
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

app.get('/shows/:id/episodes', function(request, response) {    
  const id = request.params.id;
  instance.get(`/v1/shows/${id}`)
  .then((res) => {

    const show = res.data;
    const url = show.link;
    const title = `${show.podcast_title} | Episodes`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";

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
      apple_iutnes_app_id,
      custom_favicon_image,
      backgroundColorClass
    }
    
    if(show.is_private_show) {
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
    const title = `${show.podcast_title} | Subscribe`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";

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
      apple_iutnes_app_id,
      custom_favicon_image,
      backgroundColorClass
    }
    
    if(show.is_private_show) {
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
    const title = `${show.podcast_title} | About Us`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
    const twitter_handle = show.twitter_handle ? show.twitter_handle : '';
    const apple_iutnes_app_id = show.apple_iutnes_app_id ? show.apple_iutnes_app_id : "";

    const backgroundColorClass = show.backgroundColorClass ? show.backgroundColorClass : "bg-light";

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
      custom_favicon_image,
      twitter_handle,
      apple_iutnes_app_id,
      backgroundColorClass
    }
    
    if(show.is_private_show) {
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
    title: "JustCast - The podcast hosting that save your time.",
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    title: "JustCast - The podcast hosting that save your time.",
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    title: "JustCast - The podcast hosting that save your time.",
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    title: "JustCast - The podcast hosting that save your time.",
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    title: "JustCast - The podcast hosting that save your time.",
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})


app.get('/audiogram', (request, response) => {
  const meta = {
    title: "How to create a audiogram",
    description: "Video is the best way to promote your podcast. We've created tools for you to make podcast audiogram to share on social media, blog, and even messaging services like iMessage and Slack.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, audiogram",
    url: "https://www.justcast.com/audiogram",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})


app.get('/church-podcasting', (request, response) => {
  const meta = {
    title: "JustCast: Podcast Hosting for Churches",
    description: "Creating a podcast for your church? Get unlimited episodes, analytics and a podcast website for free with JustCast.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com/church-podcasting",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    title: "JustCast: Create a Private Podcast for Free",
    description: "Want to create a private podcast, internal podcast or subscription based podcast? Create a private podcast for free with JustCast.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com/private-podcast",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
  }
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = SEOHelpers.set(meta, data)
    response.send(result);
  });   
})

app.get('/integration-twitter', (request, response) => {
  const meta = {
    title: "Twitter Integration",
    description: "Auto-tweet new podcast episodes when you publish/",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com/integration-twitter",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
    const title = `${show.podcast_title}`;
    const description = show.description ? sanitizeHtml(show.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = show.itunes_keywords ? show.itunes_keywords : '';
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
      custom_favicon_image,
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
    const podcastName = data.podcast_title;
    const url = data.permulink;
    const title = `${show.podcast_title} | ${data.episode_title}`;
    const description = data.description ? sanitizeHtml(data.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const keywords = data.itunes_keywords ? data.itunes_keywords : (show.keywords ? show.keywords : '');
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
      custom_favicon_image,
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
    const title = `${show.podcast_title} | ${data.episode_title}`;
    const description = data.description ? sanitizeHtml(data.description, {allowedTags: [], allowedAttributes: {}}) : "Podcast power by JustCast";
    // const description = "Podcast power by JustCast";
    const img = show.artwork_url ? show.artwork_url : 'https://i.imgur.com/V7irMl8.png';
    const img_16 = show.artwork_url_16;
    const img_32 = show.artwork_url_32;
    const img_64 = show.artwork_url_64;
    const img_256 = show.artwork_url_256;
    const custom_favicon_image = show.custom_favicon_image;

    const meta = {
      title,
      description,
      img,      
      url,
      custom_favicon_image,
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
    title: "JustCast - The podcast hosting that save your time.",
    description: "The easiest way to host, promote, and track your podcast.  Start your podcast today.",
    img: "",
    img_16: "",
    img_32: "",
    img_64: "",
    img_256: "https://justcast.sfo2.cdn.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png",    
    keywords: "Podcasting, Dropbox",
    url: "https://www.justcast.com",
    twitter_handle: "@thejustcast",
    apple_iutnes_app_id: "",
    backgroundColorClass: "bg-light"
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
  // const urls = [`${rootPath}/features-pricing`, `${rootPath}/examples`, `${rootPath}/about_us`, 'https://justcast.zendesk.com/hc/en-us/categories/360002641372-FAQs'];
  const urls = [
    rootPath,
    `${rootPath}/features-pricing`,
    `${rootPath}/examples`,
    `${rootPath}/about_us`,
    `${rootPath}/how-justcast-works`,
    `${rootPath}/private-podcast`,
    `${rootPath}/integration-twitter`,
    `${rootPath}/audiogram`,
    `${rootPath}/terms`,
    `${rootPath}/privacy`,
    `${rootPath}/affiliates`,
  ];
  const sitemapXml = Sitemap.generateXml(urls);
  response.header('Content-Type', 'text/xml');
  response.send(sitemapXml); 
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {  
  
  response.sendFile(filePath);
    
});

app.listen(port, () => console.log(`Listening on port ${port}`));