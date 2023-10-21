import mongoose, { SchemaTypes } from 'mongoose'

const schema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true
    },
    redirectedURL: {
        type: String,
        required: true
    },
    totalCount: {
        type: Number,
        default: 0
    },
    visitHistory: [{
        timeStamp: {
            type: Date,
        }
    }]
});

export const Schema = mongoose.model('Schema', schema);