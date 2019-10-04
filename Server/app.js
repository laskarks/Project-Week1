if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan')
const route = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
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

app.get('/', (req, res) => {
    res.send('ok')
})
app.use('/', route)


//Your Code add below this----
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))