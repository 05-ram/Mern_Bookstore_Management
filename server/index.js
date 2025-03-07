const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const connectDb = require('./config/dbConnection');
const adminRoute = require('./routes/index.js')
const cors = require('cors');
const cookieParser = require('cookie-parser')


const port = process.env.PORT || 3000;
connectDb();

app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials: true
    }
));
app.use(cookieParser())
app.use('/auth', adminRoute)


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})