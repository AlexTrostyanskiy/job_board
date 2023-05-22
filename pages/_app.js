import './global.css';
import Layout from '../components/layout';
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
        withNormalizeCSS
        theme={{
            primaryColor: 'blue',
            colorScheme: 'light',
        }}
    >
        <Layout className={inter.className}>
            <Component {...pageProps} />
        </Layout>
    </MantineProvider>
  );
}