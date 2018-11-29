const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BerichtSchema = new Schema({
        owner: {
            type: String,
            required: true,
            maxlength: [30,' 3 <= Owner <= 10 karakters'],
        },
        content: {
            type: String,
            required: true,
            maxlength: [100,'maximaal 100 karakters'],
        }
    },
    {
        timestamps: true,

        toJSON: {
            transform: (doc, ret) => {
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);

const BerichtenSchema = mongoose.model('bericht', BerichtSchema);

module.exports = BerichtenSchema;