import Image from 'next/image';
import { cloudflareImageLoader } from '../lib/cloudflareImageLoader';

export default function CloudflareImage(props) {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized {...props} />;
  }
  return <Image {...props} loader={cloudflareImageLoader} />;
}
