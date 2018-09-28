const request = require('request');
const conf = require('./conf');
const moment = require('moment');

module.exports = {
    sendHeartbeat: (id) => {
        console.log(`heartbeat ${id} ${moment().format('MM-DD HH:mm:ss')}`);
        return new Promise((resolve, reject) => {
            request({
                method: 'POST',
                uri: `${conf.api}${id}`,
            }, (error, resp) => {
                if (error)
                    reject(error);

                resolve(resp.statusCode);
            })
        })
    },

    randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}