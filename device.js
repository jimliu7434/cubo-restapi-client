const UUID4 = require('uuid/v4');
const Common = require('./common');

class Device {
    constructor(startSec = 0, intervalMin = 5) {
        const that = this;
        that.deviceid = UUID4();
        console.log(`${that.deviceid} created. Will heartbeat after ${startSec} sec`);

        setTimeout(() => {
            Common.sendHeartbeat(that.deviceid);
            that.intervalObj = setInterval(() => {
                Common.sendHeartbeat(that.deviceid);
            }, intervalMin * 60 * 1000);
        }, startSec * 1000);
    }
}

module.exports = Device;