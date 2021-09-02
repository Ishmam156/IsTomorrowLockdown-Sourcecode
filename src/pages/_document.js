import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        // Keeping track of language
        const { locale } = this.props.__NEXT_DATA__;

        return (
            <Html>
                <Head />
                <body lang={locale}>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
