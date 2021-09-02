/* eslint-disable react/prop-types */
import { Link as ChakraLink } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { sourceType } from '../utils/constants';

export const Source = ({ status, locale }) => {
    const sourceStatus = status === 'yes' ? 'yes' : 'no';

    return (
        <>
            <strong>{sourceType.header[locale]}</strong>{' '}
            <ChakraLink href={sourceType.govt[locale].link} isExternal>
                {sourceType.govt[locale].name} <ExternalLinkIcon mx="4px" />
            </ChakraLink>
            {sourceType[sourceStatus][locale].map((item) => (
                <ChakraLink href={item.link} isExternal key={item.id}>
                    {item.name} <ExternalLinkIcon mx="4px" />
                </ChakraLink>
            ))}
            <br />
        </>
    );
};
