/* eslint-disable react/prop-types */
import { Flex, Link as ChakraLink, Heading } from '@chakra-ui/react';

const englishFooter = () => (
    <Flex as="footer" justifyContent="center" alignItems="center" direction="column" py="1rem">
        <Heading size="xs" mb="2">
            Complete inspiration from{' '}
            <em>
                <ChakraLink href="https://hmelius.com/is-tomorrow-hartal/" isExternal>
                    Is Tomorrow Hartal?
                </ChakraLink>
            </em>{' '}
            ❤️
        </Heading>
    </Flex>
);

const banglaFooter = () => (
    <Flex as="footer" justifyContent="center" alignItems="center" direction="column" py="1rem">
        <Heading size="xs" mb="2">
            <em>
                <ChakraLink href="https://hmelius.com/is-tomorrow-hartal/" isExternal>
                    আগামীকাল কি হরতাল
                </ChakraLink>
            </em>{' '}
            থেকে সম্পূর্ণ অনুপ্রাণিত ❤️
        </Heading>
    </Flex>
);

export const Footer = ({ locale }) => {
    return <>{locale === 'en' ? englishFooter() : banglaFooter()}</>;
};
