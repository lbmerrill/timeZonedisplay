// Display current timezone, date, and time
const now = new Date();
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const formattedDate = now.toLocaleString('en-US', { timeZone });

console.log(`Current Time Zone: ${timeZone}`);
console.log(`Current Date and Time: ${formattedDate}`);
