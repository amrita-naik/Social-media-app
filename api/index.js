const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const postRoute = require('./routes/post.route')

dotenv.config();

mongoose.connect(process.env.DB_URL, () => {
    console.log('mongo')
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.listen('3001', ()=>{
    console.log('backend server');
})