const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors =  require('cors');
const bodyParser  = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

var authRouter = require('./routes/companies');
var stockRouter = require('./routes/stocks');

app.use('/v1/api/company/', authRouter);
app.use('/v1/api/stocks/', stockRouter);




const dbPort = process.env.DB_PORT || 27017;
const dbUrl = process.env.MONGO_NAME || "localhost";
const dbCollection = process.env.DB_COLLECTION || "ppe";
mongoose.connect(`mongodb://${dbUrl}/${dbCollection}`, {useNewUrlParser: true})
    .then(_ => console.log('MongoDB connection success'))
	.catch(err => console.error(err));
mongoose.set('useCreateIndex', true);





app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);