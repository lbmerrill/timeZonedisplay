const SunCalc = require('suncalc');

// Display current timezone, date, and time
const now = new Date();
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const formattedDate = now.toLocaleString('en-US', { timeZone });
const isDST = now.getTimezoneOffset() < Math.max(
    new Date(now.getFullYear(), 0, 1).getTimezoneOffset(),
    new Date(now.getFullYear(), 6, 1).getTimezoneOffset()
)
const utcDateTime = now.toUTCString();
// Calculate sunrise time using the suncalc library
// Install with: npm install suncalc

// Set your latitude and longitude
const latitude = 41.974733; // Windsong Observatory
const longitude = -71.441384;

const times = SunCalc.getTimes(now, latitude, longitude);
const sunrise = times.sunrise;
const sunset = times.sunset;
const moonTimes = SunCalc.getMoonTimes(now, latitude, longitude);
const moonrise = moonTimes.rise;
const moonset = moonTimes.set;


console.log(`Current Time Zone: ${timeZone}`);
console.log(`Current Date and Time: ${formattedDate}`);
console.log(`Current UTC Date and Time: ${utcDateTime}`);
console.log('------------------------------');
console.log('Sunrise Time: ' + sunrise.toLocaleTimeString('en-US', { timeZone }));

console.log('Sunset Time: ' + sunset.toLocaleTimeString('en-US', { timeZone }));
console.log('------------------------------');
if (moonrise) {
    console.log('Moonrise Time: ' + moonrise.toLocaleTimeString('en-US', { timeZone }));
} else {
    console.log('Moonrise Time: Not today at this location');
}

if (moonset) {
    console.log('Moonset Time: ' + moonset.toLocaleTimeString('en-US', { timeZone }));
} else {
    console.log('Moonset Time: Not today at this location');
}
console.log('------------------------------');if (isDST) {
    console.log(`In Daylight Saving Time (DST)`);
} else {
    console.log(`Not in Daylight Saving Time (DST)`);
}
