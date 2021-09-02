import { Flex, Box } from '@chakra-ui/react';
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share';
import { url, quote, hashtag, description, size } from '../utils/constants';

export const SocialShare = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" direction="row">
            <Box mr={2}>
                <FacebookShareButton
                    url={url}
                    quote={quote}
                    hashtag={hashtag}
                    description={description}>
                    <FacebookIcon size={size} round />
                </FacebookShareButton>
            </Box>
            <Box mr={2}>
                <WhatsappShareButton
                    url={url}
                    quote={quote}
                    hashtag={hashtag}
                    description={description}>
                    <WhatsappIcon size={size} round />
                </WhatsappShareButton>
            </Box>
            <Box mr={2}>
                <TwitterShareButton
                    url={url}
                    quote={quote}
                    hashtag={hashtag}
                    description={description}>
                    <TwitterIcon size={size} round />
                </TwitterShareButton>
            </Box>
            <Box>
                <TelegramShareButton
                    url={url}
                    quote={quote}
                    hashtag={hashtag}
                    description={description}>
                    <TelegramIcon size={size} round />
                </TelegramShareButton>
            </Box>
        </Flex>
    );
};
