/**
 * Formats JS Date to Bangla Date
 *
 * @return {string} String of Bangla Date
 */
export const formatBanglaDate = (date) => {
    const monthList = [
        'জানুয়ারী',
        'ফেব্রুয়ারী',
        'মার্চ',
        'এপ্রিল',
        'মে',
        'জুন',
        'জুলাই',
        'অগাস্ট',
        'সেপ্টেম্বর',
        'অক্টোবর',
        'নভেম্বর',
        'ডিসেম্বর'
    ];

    // Ensuring that on last day of month, we move to next month
    const dateCheckList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const numberList = [
        '০',
        '১',
        '২',
        '৩',
        '৪',
        '৫',
        '৬',
        '৭',
        '৮',
        '৯',
        '১০',
        '১১',
        '১২',
        '১৩',
        '১৪',
        '১৫',
        '১৬',
        '১৭',
        '১৮',
        '১৯',
        '২০',
        '২১',
        '২২',
        '২৩',
        '২৪',
        '২৫',
        '২৬',
        '২৭',
        '২৮',
        '২৯',
        '৩০',
        '৩১'
    ];

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
    var day = `${numberList[newDate]}`;

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [day, month, '২০২১'].join(' ');
};
