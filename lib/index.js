const SEOHelpers = {}

SEOHelpers.facebook = (title, description, img, site_name, url, type, data) => {
  // Example
  // <meta property="og:url" content="https://saas.transistor.fm/">
  // <meta property="og:type" content="website">
  // <meta property="og:site_name" content="Build Your SaaS – bootstrapping in 2019">
  // <meta property="og:description" content="Some unpopular opinions on bootstrapping">
  // <meta property="og:title" content="Should you build an audience first? | Build Your SaaS – bootstrapping in 2019">
  // <meta property="og:image" content="https://images.transistor.fm/file/transistor/images/social_images/site/6/build-your-saas-social-2019.png">

  data = data.replace(/\$OG_TITLE/g, title);
  data = data.replace(/\$OG_DESCRIPTION/g, description);
  data = data.replace(/\$OG_IMAGE/g, img);  
}

