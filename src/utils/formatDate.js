/**
 * Formats JS Date to English Date
 *
 * @return {string} String of English Date
 */
export const formatDate = (date) => {
    const monthList = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    // Ensuring that on last day of month, we move to next month
    const dateCheckList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // eslint-disable-next-line no-nested-ternary
    const ordinalDate = (newDate) =>
        newDate +
        (newDate % 10 === 1 && newDate !== 11
            ? 'st'
            : newDate % 10 === 2 && newDate !== 12
            ? 'nd'
            : newDate % 10 === 3 && newDate !== 13
            ? 'rd'
            : 'th');

    var d = new Date(date);

    var initialMonth = d.getMonth();
    var initialDate = d.getDate();

    var newDate = initialDate + 1;

    // Check if new date becomes higher than current months max date
    if (newDate > dateCheckList[initialMonth]) {
        newDate = 1;
        initialMonth += 1;
    }

    var month = `${monthList[initialMonth]}`;
    var day = `${ordinalDate(newDate)}`;
    var year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [day, month, year].join(' ');
};
