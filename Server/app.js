if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const userRouter = require('./Routes/userRouter')
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan')
    //Moongo connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/group-project1', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We Are Connected')
});
//---> Middleware initials
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//Your Code add below this----










app.use('/users',userRouter)

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))