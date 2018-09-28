const conf = require('./conf');
const clientCnt = conf.clients;
const Device = require('./device');
const Common = require('./common');

const DeviceList = [];

for (let i = 0; i < clientCnt; i++) {
    setImmediate(() => {
        // random a startSec for new device
        const rand = Common.randomInt(0, 60);
        const nDevice = new Device(rand, conf.intervalMin);
        DeviceList.push(nDevice);
    });
}