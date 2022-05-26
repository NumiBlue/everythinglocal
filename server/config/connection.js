const mongoose = require('mongoose');

//should the following ip adress be this ?
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/everythinglocal',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;