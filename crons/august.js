const request = require('superagent');
const August = require('../config/config.august.json');

const LOCKED = 'kAugLockState_Locked';
const UNLOCKED = 'kAugLockState_Unlocked';

module.exports = () => {
    request
    .put(August.urls.lockStatus)
    .set(August.headers)
    .then((data) => {
      const { body } = data;
      if (body.status === LOCKED) {
        console.log('Door is already locked. No action taken.');
      } else if (body.status === UNLOCKED) {
        console.log('Door is unlocked. Locking door. Action taken.');
        request
          .put(August.urls.lock)
          .set(August.headers)
          .then((data) => {
            console.log('Door locked successfully.');
        });
      }
  }); 
};