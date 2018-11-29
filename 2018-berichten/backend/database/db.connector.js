const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//
// Check Production vs Development mode
//
let dbUrl = 'mongodb://localhost:27017/bericht';

//
// Export connection
//
dbConnector = function(mongoUri) {

    return mongoose.connect( mongoUri, {
        //useMongoClient: true,
        useNewUrlParser: true
    })
    .then( db => {
        console.log('Connected ' + db);
    })
    .catch( error => {
        console.warn('Warning', error.toString());
        throw error;
    });

} (dbUrl);

module.exports = dbConnector;
