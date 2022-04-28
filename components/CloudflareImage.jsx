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

export default function CloudflareImage(props) {
  return <Image loader={cloudflareLoader} {...props} />;
}
