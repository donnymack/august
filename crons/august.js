const request = require('superagent');
const August = require('../config/config.august.json');

const LOCKED = 'kAugLockState_Locked';
const UNLOCKED = 'kAugLockState_Unlocked';

module.exports = (startupCheck = false) => {
    request
    .put(August.urls.lockStatus)
    .set(August.headers)
    .then((data) => {
      const { body } = data;
      if (body.status === LOCKED) {
        console.log('Door is already locked. No action taken.');
      } else if (body.status === UNLOCKED && !startupCheck) {
        console.log('Door is unlocked. Locking door. Action taken.');
        request
          .put(August.urls.lock)
          .set(August.headers)
          .then((data) => {
            console.log('Door locked successfully.');
        });
      } else if (startupCheck) {
        console.log('Startup Connection Check: Successfully connected to August. isLocked', body.status === LOCKED);
      }
  }); 
};