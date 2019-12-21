const SEOHelpers = {}

SEOHelpers.set = (meta, data) => {

  data = data.replace(/\$OG_TITLE/g, meta.title);
  data = data.replace(/\$OG_DESCRIPTION/g, meta.description);
  meta.img ? data = data.replace(/\$OG_IMAGE/g, meta.img) : null;
  meta.img ? data = data.replace(/\$IMG_16/g, meta.img_16) : null;
  meta.img ? data = data.replace(/\$IMG_32/g, meta.img_32) : null;
  meta.img ? data = data.replace(/\$IMG_64/g, meta.img_64) : null;
  meta.img ? data = data.replace(/\$IMG_256/g, meta.img_256) : null;
  data = data.replace(/\$OG_URL/g, meta.url);
  data = data.replace(/\$TWTR_HANDLE/g, meta.twitter_hanlde);
  data = data.replace(/\$ITUNES_APP_ID/g, meta.apple_iutnes_app_id);
  data = data.replace(/\$KEYWORDS/g, meta.keywords);

  return data;
}

module.exports = SEOHelpers;
