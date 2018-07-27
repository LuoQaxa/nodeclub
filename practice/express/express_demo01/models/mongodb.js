var mongoose = require('mongoose')

// 连接mongodb
mongoose.connect('mongodb://localhost/nodejs')

// export
exports.mongoose = mongoose


