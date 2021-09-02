export const ValidityDate = ({ locale, date }) => {
    if (locale === 'en') {
        return (
            <>
                Valid till: <strong>{date}</strong>
            </>
        );
    } else {
        return (
            <>
                <strong>{date}</strong> তারিখ পর্যন্ত বৈধ
            </>
        );
    }
};
