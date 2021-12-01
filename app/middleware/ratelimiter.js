require('bytenode'); 
module.exports = require('./ratelimiter.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')