const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./models/dbconfig.js');
const mongoose = require('mongoose');



const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('could not connect to the DB',err);
    process.exit();
});
app.get('/',(res,req) =>{

    console.log("Hello");
});

require('./routes/emproutes.js')(app);

app.listen(3000, () => {
    console.log("Server startes with port 3000");
});

