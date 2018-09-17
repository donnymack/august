const augustLock = require('./august');
const cron = require('cron');
const CronJob = cron.CronJob;

// Run every hour from 7:30pm-7am
new CronJob('30 19-7 * * *', () => {
  augustLock();
}, null, true, 'America/Los_Angeles');
//  augustLock(); // test.