import Image from 'next/image';

const normalizeSrc = (src) => (src.startsWith('/') ? src.slice(1) : src);

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const CloudflareImage = (props) => (
  <Image
    loader={cloudflareLoader}
    src="/me.png"
    alt="Picture of the author"
    width={500}
    height={500}
  />
);
