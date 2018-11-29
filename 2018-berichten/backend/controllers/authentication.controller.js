//
// Authentication controller
//
'use strict';

const assert = require('assert')
const ApiError = require('../ApiError')
// const User = require('../model/user.model')
// const UserInfo = require('../model/UserInfo')
const auth = require('../utils/authentication')
const bcrypt = require('bcryptjs')
const validateEmail = require('../utils/email.validator')
// const logger = require('../config/config').logger

const BCRYPT_SALT_ROUNDS = 12;

module.exports = {

    /**
     * Authenticate the incoming request by validating the JWT token. 
     * On success, we pass further processing to the next express handler.
     * 
     * https://www.sitepoint.com/using-json-web-tokens-node-js/
     * 
     * @param {*} req The incoming request, should contain valid JWT token in headers.
     * @param {*} res None. The request is passed to next for further processing.
     * @param {*} next ApiError when token is invalid, or req containing logged-in user.
     */
    validateToken(req, res, next) {


        /**
         * A token can be sent in the body of a request, via a query parameter (in the URL),
         * or as an HTTP header. We choose the header variant.
         */
        const token = req.header('x-access-token') || ''
        console.log(token)

        auth.decodeToken(token, (err, payload) => {
            if (err) {
                // Invalid token
                next(new ApiError(err.message || err, 401))
            } else {
                next()
            }
        })
    },

    /**
     * Log a user in by validating the email and password in the request.
     * Email is supposed to be more unique than a username, so we use that for identification.
     * When the email/password combination is valid a token is returned to the client. 
     * The token provides access to the protected endpoints in subsequent requests, as long 
     * as it is valid and not expired.
     * 
     * Security issue: the password is probably typed-in by the client and sent as 
     * plain text. Anyone listening on the network could read the password. The 
     * connection should therefore be secured and encrypted. Another option is to
     * encrypt the password on the client side and send it encrypted.
     * 
     * @param {*} req The incoming request, should contain valid JWT token in headers.
     * @param {*} res The token, additional user information, and status 200 when valid.
     * @param {*} next ApiError when token is invalid.
     */
    login(req, res, next) {
        try {

            assert(typeof (req.body.email) === 'string', 'email must be a string.')
            assert(validateEmail(req.body.email), 'email must be a valid email address.')
            assert(typeof (req.body.password) === 'string', 'password must be a string.')
        } catch (ex) {
            next(new ApiError(ex.toString(), 422))
            return
        }

        if( req.body.email === 'dkroeske@gmail.com' && req.body.password === 'secret') {
            console.log('*')
            const payload = {
                email: 'dkroeske@gmail.com',
                id: 'dkroeske'
            }
            res.status(200).json({
                "token": auth.encodeToken(payload),
                "email": 'dkroeske@gmail'
            });
        } else {
            next(new ApiError('unknown user'), 500)
        }
    },

    /**
     * Register a new user. The user should provide a Voornaam, Achternaam, emailaddress and 
     * password. The emailaddress should be unique when it exists, an error must be thrown.
     * The password will be encrypted by the User class and must never be stored as plain text! 
     * 
     * @param {*} req The incoming request, containing valid properties.
     * @param {*} res The created user on success, or error on invalid properties.
     * @param {*} next ApiError when supplied properties are invalid.
     */
    register(req, res, next) {
        res.status(200).json();
    }

}