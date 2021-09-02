import { formatBanglaDate } from '../utils/formatBanglaDate';
import { formatDate } from '../utils/formatDate';

export const ApplicableDate = ({ locale }) => {
    if (locale === 'en') {
        return (
            <>
                Status for: <strong>{formatDate(Date())}</strong>
            </>
        );
    } else {
        return (
            <>
                <strong>{formatBanglaDate(Date())}</strong> তারিখের অবস্থা
            </>
        );
    }
};
