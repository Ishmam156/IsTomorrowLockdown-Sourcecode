import { google } from 'googleapis';

/**
 * Uses GoogleSheets API to fetch data from Google Sheets for the project.
 *
 * @return {array} array of rows from Google Sheets
 */
export async function getStats() {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
        // Gets credentials from env variables
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID, // Google Sheets ID taken from the URL of the Sheet
            range: 'Backend' // Sheet name
        });

        const rows = response.data.values;
        if (rows.length) {
            // Mapping rows with keys that will help with destructuring
            return rows.map((row) => ({
                id: row[0],
                en: row[1],
                enStatus: row[2],
                enComment: row[3],
                bd: row[4],
                bdStatus: row[5],
                bdComment: row[6]
            }));
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}
