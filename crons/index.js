const augustLock = require('./august');
const cron = require('cron');
const CronJob = cron.CronJob;

// Run every hour from 7:30pm-7am // change to actual times
new CronJob('30 19,20,21,22,23,24,1,2,3,4,5,6,7 * * *', () => {
// new CronJob('5 3,4,5,6,7 * * *', () => {
  augustLock();
}, null, true, 'America/Los_Angeles');
augustLock(true); // Connection test.