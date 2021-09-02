import { Heading, Link as ChakraLink } from '@chakra-ui/react';
import { alphaLink, alphaPhoto } from '../utils/constants';

export const FooterMain = ({ locale }) => {
    if (locale === 'en') {
        return (
            <Heading size="xs" mb="2">
                Backed by{' '}
                <em>
                    <ChakraLink
                        href={alphaLink}
                        isExternal
                        style={{ textDecorationLine: 'underline' }}
                        color="teal.500">
                        Alpha Catering!
                    </ChakraLink>
                </em>{' '}
                Order fast food 24/7{'  '}
                <img src={alphaPhoto} alt="alpha logo" width="14px" style={{ display: 'inline' }} />
            </Heading>
        );
    } else {
        return (
            <Heading size="xs" mb="2">
                <em>
                    <ChakraLink
                        href={alphaLink}
                        isExternal
                        style={{ textDecorationLine: 'underline' }}
                        color="teal.500">
                        আলফা ক্যাটারিং
                    </ChakraLink>
                </em>{' '}
                দ্বারা সমর্থিত! 24/7 ফাস্ট ফুড অর্ডার করুন{'  '}
                <img src={alphaPhoto} alt="alpha logo" width="14px" style={{ display: 'inline' }} />
            </Heading>
        );
    }
};
