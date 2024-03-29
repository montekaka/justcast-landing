const SEOHelpers = {}

SEOHelpers.set = (meta, data) => {

  data = data.replace(/\$OG_TITLE/g, meta.title);
  data = data.replace(/\$OG_DESCRIPTION/g, meta.description);  
  meta.img ? data = data.replace(/\$OG_IMAGE/g, meta.img) : null;

  meta.custom_favicon_image ? data = data.replace(/\$FAVICON/g, meta.custom_favicon_image) : null;
  meta.img_16 ? data = data.replace(/\$IMG_16/g, meta.img_16) : data.replace(/\$OG_FAVICON/g, "%PUBLIC_URL%/favicon.ico");
  meta.img_32 ? data = data.replace(/\$IMG_32/g, meta.img_32) : null;
  meta.img_64 ? data = data.replace(/\$IMG_64/g, meta.img_64) : null;
  meta.img_256 ? data = data.replace(/\$IMG_256/g, meta.img_256) : null;

  // data.replace(/\$OG_FAVICON/g, "%PUBLIC_URL%/favicon.ico");
  data = data.replace(/\$OG_URL/g, meta.url);
  data = data.replace(/\$TWTR_HANDLE/g, meta.twitter_handle);
  data = data.replace(/\$ITUNES_APP_ID/g, meta.apple_itunes_app_id);
  data = data.replace(/\$KEYWORDS/g, meta.keywords);

  meta.title ? data = data.replace(/\$title_value/g, meta.title) : null;
  meta.rss_url ? data = data.replace(/\$rss_url/g, meta.rss_url) : null;
  const backgroundColorClass = meta.backgroundColorClass ? meta.backgroundColorClass : "bg-light";

  data = data.replace(/\$BODY_BACKGROUND_COLOR/g, backgroundColorClass)

  return data;
}

module.exports = SEOHelpers;
