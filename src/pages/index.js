/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import { Main } from '../components/Main';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { LangChange } from '../components/LangChange';
import { getStats } from '../../libs/sheets';
import { description, url, thumbnailUrl } from '../utils/constants';


const Index = ({ locale, stats }) => {
    return (
        <>
            <Head>
                <title>{stats[0][locale]}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                {/* Meta Tags to help when sharing the website */}
                <meta name="title" content="Is Tomorrow Lockdown?" />
                <meta name="description" content={description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content="Is Tomorrow Lockdown?" />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://i.imgur.com/IzupY3U.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={thumbnailUrl} />
                <meta property="twitter:title" content="Is Tomorrow Lockdown?" />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={thumbnailUrl} />
                {/* Google Analytics Tag */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVW4W4Z9FH" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'YOUR-G-TAG-HERE', { page_path: window.location.pathname });
                `
                    }}
                />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="manifest" href="/manifest.json" />
                <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#aaaaaa" />
            </Head>

            <Container minH="100vh">
                <Main locale={locale} stats={stats} />
                <DarkModeSwitch />
                <LangChange locale={locale} />
                <Footer locale={locale} />
            </Container>
        </>
    );
};

export default Index;

export const getStaticProps = async (ctx) => {
    // Share context of language and stats from API across app
    const { locale } = ctx;
    const stats = await getStats();
    return {
        props: {
            locale,
            stats: stats.slice(1, stats.length)
        },
        revalidate: 10 // In seconds
    };
};
