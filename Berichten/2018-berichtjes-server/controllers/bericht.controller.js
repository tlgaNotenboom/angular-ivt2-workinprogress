//
// CRUD operations on person
//

'use strict';

const ApiError =  require('../ApiError');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const BerichtSchema = require('../database/bericht.schema');
const Bericht = require('../models/bericht');

module.exports = {

    /**
     * Haal alle 'berichten' op
     * 
     * @param {*} req The incoming request.
     * @param {*} res The newly created person.
     * @param {*} next ApiError when id is invalid.
     */
    readBerichten( req, res, next ) {
        //
        let query = {};
        
        // Query
        BerichtSchema
            .find(query, {'owner': 1, 'content': 1, 'createdAt': 1})
            .sort('-createdAt')
            .limit(250)
            .then((rows) => {
                // construct respons
                res.status(200).json(rows);
            })
            .catch((error) => {
                next(new ApiError(error.toString(), 500))
            });
    },

   
    /**
     * Create a new 'bericht' and add it to the list.
     * 
     * @param {*} req The incoming request.
     * @param {*} res The newly created person.
     * @param {*} next ApiError when id is invalid.
     */
    createBericht( req, res, next ) { 
        //
        let bericht = new BerichtSchema(req.body);
        console.log('*' + JSON.stringify(bericht))
        bericht.save()
            .then( user => res.status(200).json(user).end() )
            .catch( error => new ApiError(error.toString(), 500));
    },
}
