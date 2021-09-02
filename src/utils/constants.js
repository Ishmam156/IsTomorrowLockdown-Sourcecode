// Alpha constants
export const alphaLink = 'https://www.buyherenow.com.bd/category/alpha';
export const alphaPhoto = 'https://dscoveragemap.s3.us-east-2.amazonaws.com/alpha.png';

// Constants to describe the website across all social media
export const url = 'https://istomorrowlockdown.com/';
export const thumbnailUrl = 'https://i.imgur.com/LAitLPA.jpeg';
export const quote = 'Get easy access to information about any ongoing lockdown in Bangladesh!';
export const hashtag = '#istomorrowlockdown';
export const description =
    'Get easy access to information about any ongoing lockdown in Bangladesh!';
export const size = 32;

// Source links
export const govLink =
    'https://cabinet.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/notices/c99a6842_e458_42b1_99cc_497fa0e42d40/276-order%20office%20open.pdf';
export const CAAB = 'http://caab.gov.bd/covid19f.html';
export const WHO =
    'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public';

// Source Structure
export const sourceType = {
    header: {
        en: 'Source:',
        bd: 'উৎস:'
    },
    govt: {
        en: {
            name: 'Bangladesh Cabinet',
            link: govLink
        },
        bd: {
            name: 'বাংলাদেশ মন্ত্রিপরিষদ',
            link: govLink
        }
    },
    yes: {
        en: [
            {
                id: 1,
                name: 'CAAB',
                link: CAAB
            }
        ],
        bd: [
            {
                id: 1,
                name: 'সিএএবি',
                link: CAAB
            }
        ]
    },
    no: {
        en: [
            {
                id: 1,
                name: 'WHO',
                link: WHO
            }
        ],
        bd: [
            {
                id: 1,
                name: 'WHO',
                link: WHO
            }
        ]
    }
};
