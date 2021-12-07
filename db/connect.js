const mongoose = require('mongoose')

const connectDb = (url) => {
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })

}

module.exports = connectDb
