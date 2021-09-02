/* eslint-disable react/prop-types */
/* eslint-disable no-var */
import { Link, Button, Flex, Heading, Text, Table, TableCaption } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaHospitalSymbol } from 'react-icons/fa';
import { GiLoveInjection } from 'react-icons/gi';
import { SocialShare } from '../components/SocialShare';
import { Source } from '../components/Source';
import { FooterMain } from '../components/FooterMain';
import { ApplicableDate } from '../components/ApplicableDate';
import { ValidityDate } from '../components/ValidityDate';
import { TableContent } from './TableContent';

export const Main = ({ locale, stats }) => (
    <Flex justifyContent="center" alignItems="center" direction="column">
        {/* Heading and status applicable date */}
        <Heading as="h6" size="md" mt="10" textAlign="center">
            {stats[1][locale]}
        </Heading>
        <Text fontSize="sm">
            <ApplicableDate locale={locale} />
        </Text>
        <Heading as="h1" size="2xl" textAlign="center" mt="3" mb="3">
            {stats[2][locale]}
        </Heading>

        {/* Table containing status information */}
        <Table variant="simple" size="sm">
            {/* Table Headers and Caption taken from API result */}
            {stats[2]['en'] === 'Yes' && (
                <TableCaption>
                    <ValidityDate locale={locale} date={stats[8][locale]} />
                </TableCaption>
            )}
            <TableContent locale={locale} stats={stats} status={stats[2]['en'].toLowerCase()} />
        </Table>
        {/* Footer, Social Icons and Source */}
        <Text fontSize="sm" align="center" mt={stats[2]['en'] === 'No' ? 5 : 1} mb="1">
            <em>{stats[4][locale]}</em>
        </Text>
        <Flex justifyContent="center" alignItems="center" direction="row">
            <Link isExternal href="https://surokkha.gov.bd/">
                <Button
                    colorScheme="teal"
                    variant="solid"
                    size="sm"
                    rightIcon={<Icon as={GiLoveInjection} />}
                    mt="2"
                    mb="2">
                    {stats[3][locale]}
                </Button>
            </Link>
            <Link isExternal href="https://covidhospitalsbd.com/">
                <Button
                    colorScheme="orange"
                    variant="solid"
                    size="sm"
                    rightIcon={<Icon as={FaHospitalSymbol} />}
                    mt="2"
                    ml="2"
                    mb="2">
                    {locale === 'en' ? 'Hospital Bed Status' : 'হাসপাতালের বেডের অবস্থা'}
                </Button>
            </Link>
        </Flex>
        <Text fontSize="sm" align="center" mt="0" mb="3">
            <em>
                {locale === 'en' ? 'Vaccine Registration Age: ' : 'টিকা নিবন্ধনের বয়স: '}
                <strong>{stats[27][locale]}</strong>
            </em>
        </Text>
        <FooterMain locale={locale} />
        <SocialShare />
        <Text fontSize="sm">
            <Source locale={locale} status={stats[2]['en'].toLowerCase()} />
        </Text>
    </Flex>
);
