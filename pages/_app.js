/* eslint-disable react/prop-types */
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
