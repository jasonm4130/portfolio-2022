/* eslint-disable no-param-reassign */
export const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75;
  }
  return `https://sweet-waterfall-f1cf.jasonm4130.workers.dev?width=${width}&quality=${quality}&image=https://portfolio-2022-1dg.pages.dev${src}`;
};
