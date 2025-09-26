// Display current timezone, date, and time
const now = new Date();
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const formattedDate = now.toLocaleString('en-US', { timeZone });
const isDST = now.getTimezoneOffset() < Math.max(
    new Date(now.getFullYear(), 0, 1).getTimezoneOffset(),
    new Date(now.getFullYear(), 6, 1).getTimezoneOffset()
);

let utcDateTime = '';
if (isDST) {
    utcDateTime = now.toUTCString();
    console.log(`Current UTC Date and Time: ${utcDateTime}`);
}
console.log(`Current Time Zone: ${timeZone}`);
console.log(`Current Date and Time: ${formattedDate}`);
