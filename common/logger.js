var config = require('../config');
var pathLib = require('path')

var env = process.env.NODE_ENV || "development"


var log4js = require('log4js');
// 该配置的意思是console是默认的appender，使用cheese这个appender时会将日志记录文件中，日志文件名为cheese.log。
// 可以在该项目的logs/文件夹下找到cheese.log文件
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: pathLib.join(config.log_dir, 'cheese.log'), category: 'cheese' }
  ]
});

var logger = log4js.getLogger('cheese');
logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR')

module.exports = logger;
