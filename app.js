const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks', tasks)


const PORT = 3000;
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

    } catch (error) {
        console.log(error);
    }
}
start();