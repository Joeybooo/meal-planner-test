const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useInifiedTopology: true
});

mongoose.set('debug', true);