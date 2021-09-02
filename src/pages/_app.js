/* eslint-disable react/prop-types */
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // Enable Google Analytics to track page changes
    const handleRouteChange = (url) => {
        window.gtag('config', 'YOUR-G-TAG-HERE', {
            page_path: url
        });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <ChakraProvider resetCSS theme={theme}>
            <ColorModeProvider
                options={{
                    useSystemColorMode: true
                }}>
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default MyApp;
