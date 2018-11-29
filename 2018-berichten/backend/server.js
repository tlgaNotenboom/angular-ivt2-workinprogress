const express = require('express');
const bodyParser = require('body-parser')
const ApiError = require('./ApiError');
const berichtenRoutes = require('./routes/berichten.routes');
const authController = require('./controllers/authentication.controller');
const authenticationroutes = require('./routes/authentication.routes')
const _ = require('./database/db.connector');
const cors = require('cors');

const port = process.env.BERICHTEN_PORT || 1234;
const httpSchemes = process.env.NODE_ENV === 'production' ? ['https'] : ['http']
const description =
    '<p> API om berichten te delen - IVT2.2</p>'

const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const expressSwagger = require('express-swagger-generator')(app);
const options = {
    swaggerDefinition : {
        info: {
            title: 'Berichten API',
            version: '1.0.0',
            description: description
        },
        host: process.env.ALLOW_ORIGIN,
        produces: [
            'application/json'
        ],
        securityDefinition: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token',
                description: 'register request dkroeske@gmail.com'
            }
        },
        schemes: httpSchemes
    },
    basedir: __dirname,
    files:['./routes/**/*.js']
};
expressSwagger(options);

//
app.use(cors());

// Serve files from the ./static folder 
app.use(express.static('./static'))

// UNPROTECTED endpoints for authentication - no token required.
// Provide login and registration 
app.use('/api', authenticationroutes)


// GET routes are UNPROTECTED
// app.use('/api', person_open_routes)

// JWT TOKEN VALIDATION for authentication
app.use('/api', authController.validateToken);

//
app.use('/api', berichtenRoutes);

app.use('*', (req, res, next) => {
    const error = new ApiError('Non-existing endpoint', 404);
    next(error);
});

app.use( (err, req, res, next) => {
    res.status(err.code || 404).json(err).end();
});

// Netjes afsluiten
function shutdown() {

    if( process.env.NODE_ENV === 'production') {
        mqttClient.end(false, () => {
            console.log('mqtt Client stop')
        });
    }
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

const server = app.listen(port, () => {
    console.log('The magic happens at port ' + server.address().port )
});

module.exports = server;