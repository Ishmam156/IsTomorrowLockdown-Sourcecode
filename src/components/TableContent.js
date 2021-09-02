/* eslint-disable react/prop-types */
/* eslint-disable no-var */
import { Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { CloseIcon } from '@chakra-ui/icons';
import { WarningTwoIcon } from '@chakra-ui/icons';

// Icons for the status text
const icons = {
    Closed: <CloseIcon color="red.300" />,
    Open: <CheckIcon color="green.500" />,
    'Partially Open': <WarningTwoIcon color="yellow.400" />,
    'Home Deliveries Only': <WarningTwoIcon color="yellow.400" />
};

export const TableContent = ({ status, stats, locale }) => {
    const lockdownStatus = status === 'yes';

    if (lockdownStatus) {
        return (
            <>
                <Thead>
                    <Tr>
                        <Th textAlign="center">{stats[5][locale]}</Th>
                        <Th textAlign="center">{stats[6][locale]}</Th>
                        <Th textAlign="center">{stats[7][locale]}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stats.slice(9, 21).map((row) => {
                        return (
                            <Tr key={row.id}>
                                <Td textAlign="center">{row[locale]}</Td>
                                <Td textAlign="center">
                                    <strong>{row[`${locale}Status`]}</strong>
                                    {'  '} {icons[row['enStatus']]}
                                </Td>
                                {/* Check if text is null and provide a hyphen for those fields */}
                                <Td textAlign="center">
                                    {row[`${locale}Comment`] === 'null'
                                        ? ' - '
                                        : row[`${locale}Comment`]}
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </>
        );
    } else {
        return (
            <>
                <Thead>
                    <Tr>
                        <Th textAlign="center">{stats[21][locale]}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stats.slice(22, 27).map((row) => {
                        return (
                            <Tr key={row.id}>
                                <Td textAlign="center">{row[locale]}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </>
        );
    }
};
